import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  image?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true })
  author: mongoose.Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
