// src/posts/posts.service.ts
import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.schema';
import { MediaService } from '../media/media.service';
import { GroupsService } from '../groups/groups.service';
import { UserRole } from '../common/enums/role.enum';
import { UserDocument } from '../users/schemas/user.schema';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import 'multer';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    private mediaService: MediaService,
    private groupsService: GroupsService,
  ) {}

  async create(
    data: CreatePostDto,
    files: Express.Multer.File[],
    user: UserDocument,
  ) {
    if (data.group) {
      const isMember = await this.groupsService.isMember(
        data.group,
        user._id.toString(),
      );
      if (!isMember && user.role !== UserRole.SUPER_ADMIN) {
        throw new ForbiddenException('Only allowed users post in groups');
      }
    }

    let imageUrls: string[] = [];
    if (files && files.length > 0) {
      imageUrls = await Promise.all(
        files.map((file) => this.mediaService.uploadFile(file)),
      );
    }

    return this.postModel.create({
      ...data,
      images: imageUrls,
      author: user._id,
    });
  }

  async findAll() {
    return this.postModel
      .find()
      .sort({ createdAt: -1 })
      .populate('author', 'username');
  }

  async update(id: string, data: UpdatePostDto, user: UserDocument) {
    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException();

    if (
      post.author.toString() !== user._id.toString() &&
      user.role !== UserRole.SUPER_ADMIN
    ) {
      throw new ForbiddenException('Only owner edits post');
    }

    return this.postModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id: string, user: UserDocument) {
    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException();

    if (
      post.author.toString() !== user._id.toString() &&
      user.role !== UserRole.SUPER_ADMIN
    ) {
      throw new ForbiddenException('Only owner deletes post');
    }

    return this.postModel.findByIdAndDelete(id);
  }
}
