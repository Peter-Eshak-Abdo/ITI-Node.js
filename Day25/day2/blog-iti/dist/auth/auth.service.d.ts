import { SignupDto } from './dto/signup.dto';
import { UserService } from "../user/user.service";
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from "../user/schemas/user.schema";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(signupDto: SignupDto): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        token: any;
        user: any;
    }>;
    genarateToken(user: UserDocument): Promise<any>;
}
