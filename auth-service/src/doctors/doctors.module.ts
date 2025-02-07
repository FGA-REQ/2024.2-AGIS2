import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService, PrismaService, JwtService],
})
export class DoctorsModule {}
