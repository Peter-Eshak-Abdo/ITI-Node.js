import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post, PostSchema } from './schemas/post.schema';
import { MediaModule } from '../media/media.module';
import { GroupsModule } from '../groups/groups.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MediaModule,
    GroupsModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
