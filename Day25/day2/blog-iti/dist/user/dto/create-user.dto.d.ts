import { UserRole } from "../../coomen/util/enums/user.enum";
export declare class CreateUserDto {
    name: string;
    age?: number;
    email: string;
    password: string;
    role: UserRole;
}
