import {
  Controller,
  Get,
  // Param,
  Patch,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Patch('profile-image')
  @UseInterceptors(FileInterceptor('image'))
  uploadProfileImage(
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: { _id: string },
  ) {
    return this.usersService.updateProfileImage(user._id, file);
  }
}
