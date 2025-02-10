import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { PrismaService } from 'src/prisma.service';
import { ApiModule } from 'src/api/api.module';
import { ApiService } from 'src/api.service';
import { WhatsappService } from '../../../whatsapp-service/src/whatsapp/whatsapp.service';
import { WhatsappModule } from '../../../whatsapp-service/src/whatsapp/whatsapp.module';

@Module({
  imports: [ApiModule],
  controllers: [ScheduleController, WhatsappModule],
  providers: [ScheduleService, PrismaService, WhatsappService],
})
export class ScheduleModule { }
