import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordResetService {
    private readonly logger = new Logger(PasswordResetService.name);

    constructor(private readonly prisma: PrismaService,
        private readonly emailService: EmailService
    ) { }

    async sendResetToken(email: string, userType: "doctor" | "pacient"): Promise<string> {
        let user;
        if (userType === "doctor") {
            user = await this.prisma.doctor.findUnique({ where: { email } });
        } else if (userType === "pacient") {
            user = await this.prisma.pacient.findUnique({ where: { email } });
        }
        if (!user) {
            throw new Error('Usuario nao encontrado');
        }
        const token = Math.random().toString(36).substring(2);
        if (userType === 'doctor') {
            await this.prisma.doctor.update({ where: { email }, data: { passwordResetToken: token } });
          } else {
            await this.prisma.pacient.update({ where: { email }, data: { passwordResetToken: token } });
          }
          await this.emailService.sendPasswordResetEmail(email, token);
        return 'Token enviado com sucesso';
    }

    async resetPassword(email: string, token: string, newPassword: string, userType: "doctor" | "pacient"): Promise<string> {
        let user;
        const salt = bcrypt.genSaltSync(10);
        const senhaEncriptada = bcrypt.hashSync(newPassword, salt);

        if (userType === "doctor") {
            user = await this.prisma.doctor.findUnique({ where: { email } });
        } else if (userType === "pacient") {
            user = await this.prisma.pacient.findUnique({ where: { email } });
        }
        if (!user) {
            throw new Error('Usuario nao encontrado');
        }
        if (user.passwordResetToken !== token) {
            throw new Error('Token invalido');
        }
        if (userType === 'doctor') {
            await this.prisma.doctor.update({ where: { email }, data: { hashedPassword: senhaEncriptada, passwordResetToken: null } });
          } else {
            await this.prisma.pacient.update({ where: { email }, data: { hashedPassword: senhaEncriptada, passwordResetToken: null } });
          }
          return 'Senha redefinida com sucesso';
    }
}