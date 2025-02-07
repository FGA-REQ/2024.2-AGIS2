import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';


@Module({
  controllers: [PatientsController],
  providers: [PatientsService, PrismaService, JwtService],
})
export class PatientsModule { }
