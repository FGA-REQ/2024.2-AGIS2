import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DoctorsModule],
})
export class AppModule {}
