import { PipeTransform } from '@nestjs/common';
export declare class ObjectIdPipe implements PipeTransform {
    transform(value: string): string;
}
