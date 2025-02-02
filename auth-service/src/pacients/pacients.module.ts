import { Module } from '@nestjs/common';
import { PacientsService } from './pacients.service';
import { PacientsController } from './pacients.controller';
import { PrismaService } from 'src/prisma.service';


@Module({
  controllers: [PacientsController],
  providers: [PacientsService, PrismaService],
})
export class PacientsModule { }
