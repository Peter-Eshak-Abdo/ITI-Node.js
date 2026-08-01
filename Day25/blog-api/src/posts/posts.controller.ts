import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { UserDocument } from '../users/schemas/user.schema';
import type { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import 'multer';

@UseGuards(JwtAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 5))
  create(
    @Body() data: CreatePostDto,
    @UploadedFiles() files: Express.Multer.File[],
    @CurrentUser() user: UserDocument,
  ) {
    return this.postsService.create(data, files, user);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdatePostDto,
    @CurrentUser() user: UserDocument,
  ) {
    return this.postsService.update(id, data, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: UserDocument) {
    return this.postsService.remove(id, user);
  }
}
