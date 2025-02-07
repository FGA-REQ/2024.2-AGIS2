import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Ou outro serviço (Outlook, SMTP customizado, etc.)
      auth: {
        user: process.env.EMAIL_USER, // E-mail do remetente (configure no .env)
        pass: process.env.EMAIL_PASS, // Senha ou app password (configure no .env)
      },
    });
  }

  async sendPasswordResetEmail(to: string, token: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Token de redefineção de senha', 
      text: `Você solicitou a redefinição de senha. Aqui está o seu token:`,
      html: `<p><b>${token}</b></p>`,
    };
    try {
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Password reset email sent to ${to}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${to}`, error.message);
      throw new Error('Failed to send email');
    }
  }
}
