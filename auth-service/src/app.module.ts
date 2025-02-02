import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PacientsModule } from './pacients/pacients.module';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { EmailService } from './email/email.service';

@Module({
  controllers: [AppController],
  providers: [AppService, EmailService],
  imports: [DoctorsModule, PacientsModule, PasswordResetModule],
})
export class AppModule {}
