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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("./schemas/user.schema");
const post_schema_1 = require("./post/schemas/post.schema");
let UserService = class UserService {
    userModel;
    postModel;
    constructor(userModel, postModel) {
        this.userModel = userModel;
        this.postModel = postModel;
    }
    async create(createUserDto) {
        return await this.userModel.create(createUserDto);
    }
    async findAll() {
        return await this.userModel.find().select("-password");
    }
    async findOne(id) {
        const user = await this.userModel.findById(id).select("-password");
        if (!user)
            throw new common_1.NotFoundException("User not found");
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
            new: true,
        });
        if (!user)
            throw new common_1.NotFoundException("User not found");
        return user;
    }
    async remove(id) {
        const user = await this.userModel.findByIdAndDelete(id);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        await this.postModel.deleteMany({ author: id });
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map