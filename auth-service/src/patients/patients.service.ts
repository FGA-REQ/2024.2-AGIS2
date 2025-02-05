import { Injectable, Logger } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(PatientsService.name);

  async create(createPatientDto: CreatePatientDto) {
    try {
      const { name, email, birthday, CPF, telephone, password } = createPatientDto;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.prisma.patient.create({ data: { name, email, birthday, CPF, telephone, hashedPassword } })
      this.logger.log(`Created patient ${name}.`);
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return `This action returns all patients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
