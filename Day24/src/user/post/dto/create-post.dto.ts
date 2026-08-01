import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() @IsNotEmpty() content: string;
  @IsString() @IsOptional() image?: string;
  @IsMongoId() @IsNotEmpty() author: string;
}
