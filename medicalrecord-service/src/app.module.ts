import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicalrecordModule } from './medicalrecord/medicalrecord.module';
import { PrescriptionModule } from './prescription/prescription.module';

@Module({
  imports: [MedicalrecordModule, PrescriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
