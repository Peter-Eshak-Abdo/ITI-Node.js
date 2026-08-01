import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema({ timestamps: true })
export class Group {
  @Prop({ required: true, unique: true })
  name!: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  admins!: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  members!: Types.ObjectId[];

  @Prop({ type: [String], default: [] })
  permissions!: string[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
