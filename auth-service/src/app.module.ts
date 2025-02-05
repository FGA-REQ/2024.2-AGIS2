import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PacientsModule } from './pacients/pacients.module';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { EmailService } from './email/email.service';
import { GoogleCalendarModule } from './google-calendar/google-calendar.module';
import { GoogleAuthService } from './google-auth/google-auth.service';
import { GoogleAuthController } from './google-auth/google-auth.controller';



@Module({
  controllers: [AppController, GoogleAuthController],
  providers: [AppService, EmailService, GoogleAuthService],
  imports: [DoctorsModule, PacientsModule, PasswordResetModule, GoogleCalendarModule, ConfigModule.forRoot({ isGlobal: true }),],
})
export class AppModule {}
