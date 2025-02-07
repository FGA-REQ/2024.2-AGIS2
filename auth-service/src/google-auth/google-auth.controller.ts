import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';

@Controller('auth/google')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get()
  @Redirect()
  getGoogleAuthUrl() {
    return { url: this.googleAuthService.getAuthUrl() };
  }

  @Get('callback')
  async googleAuthCallback(@Query('code') code: string) {
    const tokens = await this.googleAuthService.getTokens(code);
    return { message: 'Login bem-sucedido!', tokens };
  }
}
