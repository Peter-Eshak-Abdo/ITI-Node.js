import { Module, forwardRef } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "./schemas/post.schema";
import { UserModule } from "../user.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    forwardRef(() => UserModule),
  ],
  controllers: [PostController],
  providers: [PostService],
  exports: [MongooseModule],
})
export class PostModule {}
