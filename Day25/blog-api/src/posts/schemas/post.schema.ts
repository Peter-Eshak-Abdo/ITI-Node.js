import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  content!: string;

  @Prop({ type: [String], default: [] })
  images!: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Group', required: false })
  group?: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
