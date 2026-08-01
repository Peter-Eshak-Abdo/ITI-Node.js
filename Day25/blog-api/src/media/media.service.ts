import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ImageKit from 'imagekit';
import 'multer';

@Injectable()
export class MediaService {
  private imagekit: ImageKit;

  constructor(private configService: ConfigService) {
    this.imagekit = new ImageKit({
      publicKey: this.configService.get<string>('IMAGEKIT_PUBLIC_KEY') || '',
      privateKey: this.configService.get<string>('IMAGEKIT_PRIVATE_KEY') || '',
      urlEndpoint:
        this.configService.get<string>('IMAGEKIT_URL_ENDPOINT') || '',
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const response = await this.imagekit.upload({
      file: file.buffer,
      fileName: `${Date.now()}-${file.originalname}`,
    });
    return response.url;
  }
}
