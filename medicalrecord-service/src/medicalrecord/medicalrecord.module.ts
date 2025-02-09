import { Module } from '@nestjs/common';
import { MedicalrecordService } from './medicalrecord.service';
import { MedicalrecordController } from './medicalrecord.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [MedicalrecordController],
  providers: [MedicalrecordService, PrismaService, JwtService],
})
export class MedicalrecordModule {}
