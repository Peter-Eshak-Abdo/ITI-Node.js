import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../users/schemas/user.schema';
import { Request } from 'express';

interface JwtPayload {
  userId: string;
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: UserDocument }>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authentication required');
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token);
      const user = await this.userModel.findById(payload.userId);

      if (!user) throw new UnauthorizedException();

      request.user = user;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
