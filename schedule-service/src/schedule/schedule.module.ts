import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, PrismaService, ApiService],
})
export class ScheduleModule { }
