import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from '../../common/enums/role.enum';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username!: string;

  @Prop({ required: true, unique: true })
  email!: string;

  @Prop({ required: true, select: false })
  password!: string;

  @Prop()
  profileImage?: string;

  @Prop({ required: true, enum: UserRole, default: UserRole.USER })
  role!: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
