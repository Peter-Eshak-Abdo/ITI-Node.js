import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new BadRequestException('Email already in use');
    const user = await this.usersService.create(dto);
    return { message: 'Registered successfully', user };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmailWithPassword(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const token = await this.jwtService.signAsync({ userId: user._id });
    const { ...userWithoutPassword } = user.toObject();
    return { token, user: userWithoutPassword };
  }
}
