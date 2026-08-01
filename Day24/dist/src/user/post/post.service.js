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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_schema_1 = require("./schemas/post.schema");
const user_service_1 = require("../user.service");
let PostService = class PostService {
    postModel;
    userService;
    constructor(postModel, userService) {
        this.postModel = postModel;
        this.userService = userService;
    }
    async create(createPostDto) {
        await this.userService.findOne(createPostDto.author);
        return await this.postModel.create(createPostDto);
    }
    async findAll() {
        return await this.postModel.find().populate("author", "name email");
    }
    async findOne(id) {
        const post = await this.postModel
            .findById(id)
            .populate("author", "name email");
        if (!post)
            throw new common_1.NotFoundException("Post not found");
        return post;
    }
    async update(id, updatePostDto) {
        const post = await this.postModel.findByIdAndUpdate(id, updatePostDto, {
            new: true,
        });
        if (!post)
            throw new common_1.NotFoundException("Post not found");
        return post;
    }
    async remove(id) {
        const post = await this.postModel.findByIdAndDelete(id);
        if (!post)
            throw new common_1.NotFoundException("Post not found");
        return post;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], PostService);
//# sourceMappingURL=post.service.js.map