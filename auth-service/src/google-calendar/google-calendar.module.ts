import { Module } from '@nestjs/common';
import { GoogleCalendarService } from './google-calendar.service';
import { ConfigModule } from '@nestjs/config';
import { GoogleCalendarController } from './google-calendar.controller';
import { GoogleAuthService } from '../google-auth/google-auth.service';


@Module({
  imports: [ConfigModule],
  providers: [GoogleCalendarService, GoogleAuthService],
  controllers: [GoogleCalendarController]
})
export class GoogleCalendarModule {}
