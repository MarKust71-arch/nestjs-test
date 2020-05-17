import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  public send(): void {
    this.mailerService
      .sendMail({
        to: 'marek.kustosz@gmail.com',
        subject: 'test NestJS',
        text: 'cześć',
        html: '<b>cześć</b>',
      })
      .then((res) => {
        console.log('poszło...', res.response);
      })
      .catch((err) => {
        console.log('jakiś błąd:', err.message);
      });
  }
}
