import { Module } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';
import { PasswordResetController } from './password-reset.controller';
import { PrismaService } from '../prisma.service';
import { EmailService } from '../email/email.service';


@Module({
  providers: [PasswordResetService, PrismaService, EmailService],
  controllers: [PasswordResetController]
})
export class PasswordResetModule {}
