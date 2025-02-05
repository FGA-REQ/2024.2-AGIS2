import { Module } from '@nestjs/common';
import { DrugServiceService } from './drug.service';
import { DrugServiceController } from './drug.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DrugServiceController],
  providers: [DrugServiceService, PrismaService, JwtService],
})
export class DrugServiceModule { }
