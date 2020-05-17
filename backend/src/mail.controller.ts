import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('/api/email')
  sendEmail(): void {
    return this.mailService.send();
  }
}
