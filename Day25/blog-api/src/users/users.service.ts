import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { MediaService } from '../media/media.service';
import { RegisterDto } from '../auth/dto/auth.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private mediaService: MediaService,
  ) {}

  async create(data: RegisterDto) {
    return this.userModel.create(data);
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async findByEmailWithPassword(email: string) {
    return this.userModel.findOne({ email }).select('+password');
  }

  async findAll() {
    return this.userModel.find();
  }

  async updateProfileImage(userId: string, file: Express.Multer.File) {
    const imageUrl = await this.mediaService.uploadFile(file);
    return this.userModel.findByIdAndUpdate(
      userId,
      { profileImage: imageUrl },
      { new: true },
    );
  }
}
