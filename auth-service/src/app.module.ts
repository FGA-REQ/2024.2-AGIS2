import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PacientsModule } from './pacients/pacients.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DoctorsModule, PacientsModule],
})
export class AppModule {}
