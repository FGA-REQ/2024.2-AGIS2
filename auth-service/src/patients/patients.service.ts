import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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
    return this.prisma.patient.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  async update(CPF: string, updatePatientDto: UpdatePatientDto) {
    try {
      const patient = await this.prisma.patient.findUnique({ where: { CPF } });
      if (!patient) {
        throw new NotFoundException(`Paciente com CPF ${CPF} não encontrado`);
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(updatePatientDto.password, salt);

      const payload = { ...(({ password, ...all }) => all)(updatePatientDto), hashedPassword };
      await this.prisma.patient.update({ where: { CPF: CPF }, data: payload });
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Doutor com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }

  async remove(CPF: string) {
    try {
      const patient = await this.prisma.patient.findUnique({ where: { CPF } });
      if (!patient) {
        throw new NotFoundException(`Paciente com CPF ${CPF} não encontrado`);
      }

      await this.prisma.patient.delete({ where: { CPF } });
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Paciente com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }
}
