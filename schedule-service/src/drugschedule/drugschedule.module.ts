import { Module } from '@nestjs/common';
import { DrugscheduleService } from './drugschedule.service';
import { DrugscheduleController } from './drugschedule.controller';
import { ApiService } from 'src/api.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DrugscheduleController],
  providers: [DrugscheduleService, ApiService, PrismaService],
})
export class DrugscheduleModule {}
