import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sendEmail(): string {
    return 'to kiedyś wyśle emaila';
  }
}
