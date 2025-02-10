import { Module } from '@nestjs/common';
import { DrugscheduleService } from './drugschedule.service';
import { DrugscheduleController } from './drugschedule.controller';
import { ApiModule } from 'src/api/api.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [ApiModule],
  controllers: [DrugscheduleController],
  providers: [DrugscheduleService, PrismaService],
})
export class DrugscheduleModule {}
