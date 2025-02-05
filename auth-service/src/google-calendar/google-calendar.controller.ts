import { Controller, Post, Body } from '@nestjs/common';
import { GoogleCalendarService } from './google-calendar.service';

@Controller('google-calendar')
export class GoogleCalendarController {
  constructor(private readonly googleCalendarService: GoogleCalendarService) {}

  @Post()
  async createEvent(@Body() eventData: any) {
    return this.googleCalendarService.createEvent(eventData);
  }
}
