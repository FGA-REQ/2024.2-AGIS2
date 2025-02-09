import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { DrugscheduleModule } from './drugschedule/drugschedule.module';

@Module({
  imports: [ScheduleModule, DrugscheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
