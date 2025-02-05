import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import { GoogleAuthService } from '../google-auth/google-auth.service';

@Injectable()
export class GoogleCalendarService {
  private calendar;

  constructor(private googleAuthService: GoogleAuthService) {
    this.calendar = google.calendar({ version: 'v3' });
  }

  async createEvent(eventData: any) {
    const authClient = this.googleAuthService.getClient();
    authClient.setCredentials(eventData.tokens); // Define os tokens do usuário autenticado

    const calendarId =
      '133b868a99e19dd128085834aaf1a24c250aa9befeaa645e55d7d0f8d4461ff9@group.calendar.google.com';

    const event = {
      summary: eventData.summary || 'Consulta Médica',
      description: eventData.description || 'Lembrete de consulta médica agendada.',
      start: {
        dateTime: eventData.startDateTime || new Date().toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      end: {
        dateTime: eventData.endDateTime || new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        timeZone: 'America/Sao_Paulo',
      },
      attendees: eventData.attendees || [{ email: 'exemplo@gmail.com' }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 30 },
        ],
      },
    };

    try {
      const response = await this.calendar.events.insert({
        auth: authClient,
        calendarId,
        requestBody: event,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      throw error;
    }
  }
}
