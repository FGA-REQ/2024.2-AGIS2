import { Controller, Post, Body } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';

@Controller('password-reset')
export class PasswordResetController {
  constructor(private readonly passwordResetService: PasswordResetService) {}

  @Post('send-token')
  async sendResetToken(
    @Body('email') email: string,
  ) {
    return await this.passwordResetService.sendResetToken(email);
  }
  @Post('reset-password')
  async resetPassword(
    @Body('email') email: string,
    @Body('token') token: string,
    @Body('newPassword') newPassword: string,
  ){
    return await this.passwordResetService.resetPassword(email, token, newPassword);
  }
}