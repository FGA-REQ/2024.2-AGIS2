import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [DoctorsModule, PatientsModule, 
    JwtModule.register({ 
      secret: process.env.JWT_SECRET, 
      signOptions: { expiresIn: "8h"}
    }), LoginModule, AdminModule
  ],
})
export class AppModule {}
