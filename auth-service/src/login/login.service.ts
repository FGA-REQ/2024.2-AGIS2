import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersHelper } from 'src/helpers/users.helper';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService, private jwt: JwtService) { }
  async login(loginDto: LoginDto) {
    let { CPF, password } = loginDto;
    CPF = UsersHelper.validateCPFOrCNPJ(CPF);
    let roles: string[] = [];
    let hashedPassword: string;
    try {
      const admin = await this.prisma.admin.findFirst({ where: { CPF: CPF } });
      const doctor = await this.prisma.doctor.findFirst({ where: { CPF: CPF } });
      const patient = await this.prisma.patient.findFirst({ where: { CPF: CPF } });
      
      if (admin) {
        hashedPassword = admin.hashedPassword;
        roles.push("admin");
      }
      if (doctor) {
        roles.push("doctor");
        hashedPassword = doctor.hashedPassword;
      }
      if (patient) {
        if (patient) roles.push("patient");
        hashedPassword = patient.hashedPassword;
      }

      if (roles.length === 0) throw new ForbiddenException(`Usuário ou senha incorreta!`);

      if (!await bcrypt.compare(password, hashedPassword)) {
        throw new ForbiddenException(`Usuário ou senha incorreta!`);
      }
      const token = this.jwt.sign(
        {
          name: admin ? admin.name : doctor ? doctor.name : patient.name,
          roles: roles,
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
