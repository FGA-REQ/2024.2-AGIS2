import { Module } from '@nestjs/common';
import { HealthcareplanService } from './healthcareplan.service';
import { HealthcareplanController } from './healthcareplan.controller';
import { PrismaService } from 'src/prisma.service';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [HealthcareplanController],
  providers: [HealthcareplanService, PrismaService],
})
export class HealthcareplanModule {}
