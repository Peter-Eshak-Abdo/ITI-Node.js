import { AppService } from './app.service';
import type { Request, Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): {
        message: string;
    };
    postHello(req: Request, body: any, id: string, hamada: string, res: Response): Response<any, Record<string, any>>;
}
