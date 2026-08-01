import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Group, GroupDocument } from './schemas/group.schema';
import { UserRole } from '../common/enums/role.enum';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name) private groupModel: Model<GroupDocument>,
  ) {}

  async createGroup(name: string, creatorId: string) {
    return this.groupModel.create({
      name,
      admins: [new Types.ObjectId(creatorId)],
      members: [new Types.ObjectId(creatorId)],
    });
  }

  async manageMember(
    groupId: string,
    userId: string,
    action: 'add' | 'remove',
    adminUser: { _id: string | Types.ObjectId; role: UserRole },
  ) {
    const group = await this.groupModel.findById(groupId);
    if (!group) throw new NotFoundException('Group not found');

    const isAdmin = group.admins.some(
      (id) => id.toString() === adminUser._id.toString(),
    );
    if (!isAdmin && adminUser.role !== UserRole.SUPER_ADMIN) {
      throw new ForbiddenException('Only admins manage group users');
    }

    const updateQuery =
      action === 'add'
        ? { $addToSet: { members: new Types.ObjectId(userId) } }
        : { $pull: { members: new Types.ObjectId(userId) } };

    return this.groupModel.findByIdAndUpdate(groupId, updateQuery, {
      new: true,
    });
  }

  async isMember(groupId: string, userId: string): Promise<boolean> {
    const group = await this.groupModel.findById(groupId);
    if (!group) return false;
    return group.members.some((id) => id.toString() === userId.toString());
  }
}
