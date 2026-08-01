import {
  Controller,
  Post,
  Body,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  createGroup(
    @Body('name') name: string,
    @CurrentUser() user: { _id: string },
  ) {
    return this.groupsService.createGroup(name, user._id);
  }

  @Patch(':id/members')
  manageMember(
    @Param('id') groupId: string,
    @Body('userId') userId: string,
    @Body('action') action: 'add' | 'remove',
    @CurrentUser() adminUser: { _id: string; role: any },
  ) {
    return this.groupsService.manageMember(groupId, userId, action, adminUser);
  }
}
