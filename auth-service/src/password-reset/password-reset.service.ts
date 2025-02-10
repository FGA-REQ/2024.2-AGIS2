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

    async sendResetToken(email: string): Promise<string> {

           const userDoctor = await this.prisma.doctor.findUnique({ where: { email } });
           const userPatient = await this.prisma.patient.findUnique({ where: { email } });

        if (!userDoctor && !userPatient) {
            throw new Error('Usuario nao encontrado');
        }

        const token = Math.random().toString(36).substring(2);

        if (userDoctor) {
            await this.prisma.doctor.update({ where: { email }, data: { passwordResetToken: token } });
          } else {
            await this.prisma.patient.update({ where: { email }, data: { passwordResetToken: token } });
          }
          await this.emailService.sendPasswordResetEmail(email, token);
        return 'Token enviado com sucesso';
    }

    async resetPassword(email: string, token: string, newPassword: string): Promise<string> {
        let user;
        const salt = bcrypt.genSaltSync(10);
        const senhaEncriptada = bcrypt.hashSync(newPassword, salt);

        const userDoctor = await this.prisma.doctor.findUnique({ where: { email } });
        const userPatient = await this.prisma.patient.findUnique({ where: { email } });

        if (userDoctor) {
            user = await this.prisma.doctor.findUnique({ where: { email } });
        } else if (userPatient) {
            user = await this.prisma.patient.findUnique({ where: { email } });
        }
        if (!user) {
            throw new Error('Usuario nao encontrado');
        }
        if (user.passwordResetToken !== token) {
            throw new Error('Token invalido');
        }
        if (userDoctor) {
            await this.prisma.doctor.update({ where: { email }, data: { hashedPassword: senhaEncriptada, passwordResetToken: null } });
          } else {
            await this.prisma.patient.update({ where: { email }, data: { hashedPassword: senhaEncriptada, passwordResetToken: null } });
          }
          return 'Senha redefinida com sucesso';
    }
}