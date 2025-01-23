import { Injectable, Logger } from '@nestjs/common';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PacientsService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(PacientsService.name);

  async create(createPacientDto: CreatePacientDto) {
    try {
      const { name, email, birthday, CPF, telephone, password } = createPacientDto;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.prisma.pacient.create({ data: { name, email, birthday, CPF, telephone, hashedPassword } })
      this.logger.log(`Created pacient ${name}.`);
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return `This action returns all pacients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pacient`;
  }

  update(id: number, updatePacientDto: UpdatePacientDto) {
    return `This action updates a #${id} pacient`;
  }

  remove(id: number) {
    return `This action removes a #${id} pacient`;
  }
}
