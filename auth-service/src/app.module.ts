import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { EmailService } from './email/email.service';
import { GoogleCalendarModule } from './google-calendar/google-calendar.module';
import { GoogleAuthService } from './google-auth/google-auth.service';
import { GoogleAuthController } from './google-auth/google-auth.controller';

@Module({
  controllers: [AppController, GoogleAuthController],
  providers: [AppService, EmailService, GoogleAuthService],
  imports: [DoctorsModule,
            PatientsModule,
            PasswordResetModule,
            GoogleCalendarModule,
            ConfigModule.forRoot({ isGlobal: true }),
            JwtModule.register({ 
              secret: process.env.JWT_SECRET, 
              signOptions: { expiresIn: "8h"}
            }), 
            LoginModule,
            AdminModule,
            PasswordResetModule
  ]
})

export class AppModule {}