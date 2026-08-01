import {
  Injectable,
  NotFoundException,
  Inject,
  forwardRef,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post, PostDocument } from "./schemas/post.schema";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { UserService } from "../user.service";
// import { UserService } from "../user/user.service";

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    await this.userService.findOne(createPostDto.author);
    return await this.postModel.create(createPostDto);
  }

  async findAll() {
    return await this.postModel.find().populate("author", "name email");
  }

  async findOne(id: string) {
    const post = await this.postModel
      .findById(id)
      .populate("author", "name email");
    if (!post) throw new NotFoundException("Post not found");
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.postModel.findByIdAndUpdate(id, updatePostDto, {
      new: true,
    });
    if (!post) throw new NotFoundException("Post not found");
    return post;
  }

  async remove(id: string) {
    const post = await this.postModel.findByIdAndDelete(id);
    if (!post) throw new NotFoundException("Post not found");
    return post;
  }
}
