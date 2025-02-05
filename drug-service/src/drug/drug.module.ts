import { Module } from '@nestjs/common';
import { DrugServiceService } from './drug.service';
import { DrugServiceController } from './drug.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DrugServiceController],
  providers: [DrugServiceService, PrismaService],
})
export class DrugServiceModule { }
