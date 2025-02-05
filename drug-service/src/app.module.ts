import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrugServiceModule } from './drug/drug.module';

@Module({
  imports: [DrugServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
