import { Module } from '@nestjs/common';
import { HealthcareplanService } from './healthcareplan.service';
import { HealthcareplanController } from './healthcareplan.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HealthcareplanController],
  providers: [HealthcareplanService, PrismaService],
})
export class HealthcareplanModule {}
