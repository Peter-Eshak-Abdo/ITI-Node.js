import { HydratedDocument } from 'mongoose';
import { UserRole } from "../../coomen/util/enums/user.enum";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    name: string;
    age?: number;
    email: string;
    password: string;
    role: UserRole;
}
export declare const userSchema: any;
