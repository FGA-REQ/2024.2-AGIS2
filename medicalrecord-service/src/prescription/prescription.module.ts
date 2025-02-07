import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PrescriptionController],
  providers: [PrescriptionService, PrismaService, JwtService],
})
export class PrescriptionModule { }
