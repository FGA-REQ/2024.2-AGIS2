import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthcareplanModule } from './healthcareplan/healthcareplan.module';

@Module({
  imports: [HealthcareplanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
