import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService, private jwt: JwtService) { }
  async login(loginDto: LoginDto) {
    const { CPF, password } = loginDto;
    try {
      const doctor = await this.prisma.doctor.findFirst({ where: { CPF: CPF } });
      const patient = await this.prisma.patient.findFirst({ where: { CPF: CPF } });
      const admin = await this.prisma.admin.findFirst({ where: { CPF: CPF } });
      let hashedPassword: string;
      let role: string;
      if (doctor) {
        role = "doctor";
        hashedPassword = doctor.hashedPassword;
      }
      else if (patient) {
        role = "patient";
        hashedPassword = patient.hashedPassword;
      }
      else if (admin) {
        role = "admin";
        hashedPassword = admin.hashedPassword;
      }
      else {
        throw new ForbiddenException(`Usuário ou senha incorreta!`);
      }
      if (!await bcrypt.compare(password, hashedPassword)) {
        throw new ForbiddenException(`Usuário ou senha incorreta!`);
      }
      const token = this.jwt.sign(
        {
          name: doctor ? doctor.name : admin ? admin.name : patient.name,
          role: role,
        },
        {
          secret: process.env.JWT_SECRET,
        }
      );
      return token;

    } catch (error) {
      throw error;
    }
  }
}
