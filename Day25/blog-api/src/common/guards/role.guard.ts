import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { UserRole } from '../enums/role.enum';

interface AuthRequest extends Request {
  user?: { role: UserRole };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      'roles',
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true;
    const request = context.switchToHttp().getRequest<AuthRequest>();
    const { user } = request;
    if (!user) throw new ForbiddenException('User not found');
    if (user.role === UserRole.SUPER_ADMIN) return true;
    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException('You do not have the required role');
    }
    return true;
  }
}
