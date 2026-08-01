"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../../user/user.service");
let AuthGuard = class AuthGuard {
    jwtService;
    userService;
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authToken = request.headers.authorization;
        if (!authToken) {
            throw new common_1.UnauthorizedException('you are not logged in');
        }
        const [type, token] = authToken.split(' ');
        if (!token || type !== 'Bearer') {
            console.log('invalid token from type');
            throw new common_1.UnauthorizedException('invalid token');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token);
            const user = await this.userService.findOne(payload.userId);
            if (!user) {
                throw new common_1.UnauthorizedException('user not found');
            }
            request['user'] = user;
            return true;
        }
        catch (error) {
            console.log(error);
            if (error instanceof Error) {
                if (error.name === 'TokenExpiredError') {
                    throw new common_1.UnauthorizedException('Token expired');
                }
            }
            throw new common_1.UnauthorizedException('Invalid token');
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, user_service_1.UserService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map