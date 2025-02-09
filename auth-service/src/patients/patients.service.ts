import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersHelper } from 'src/helpers/users.helper';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(PatientsService.name);

  async create(createPatientDto: CreatePatientDto) {
    try {
      let { name, email, birthday, CPF, telephone, password } = createPatientDto;
      CPF = UsersHelper.validateCPFOrCNPJ(CPF);
      const hashedPassword = await UsersHelper.hashPassword(password);
      await this.prisma.patient.create({ data: { name, email, birthday, CPF, telephone, hashedPassword } })
      this.logger.log(`Created patient ${name}.`);
    } catch (error) {
      this.logger.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.patient.findMany();
    } catch (error) {
      this.logger.error(`Falha ao buscar Pacientes: ${error.message}`);
      throw error;
    }

  }

  async findOne(CPF: string) {
    try {
      const patient = await this.prisma.patient.findUnique({ where: { CPF } });
      if (!patient) {
        throw new NotFoundException(`Paciente com CPF ${CPF} não encontrado`);
      }
      return patient;
    } catch (error) {
      this.logger.error(`Falha ao buscar paciente com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }

  async update(CPF: string, updatePatientDto: UpdatePatientDto) {
    try {
      await this.findOne(CPF);
      let hashedPassword: string | undefined;
      if (updatePatientDto.password) {
        hashedPassword = await UsersHelper.hashPassword(updatePatientDto.password);
      }
      const payload = { ...(({ password, ...all }) => all)(updatePatientDto), ...(hashedPassword && { hashedPassword }) };
      await this.prisma.patient.update({ where: { CPF: CPF }, data: payload });
      this.logger.log(`Updated patient ${CPF}`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Doutor com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }

  async remove(CPF: string) {
    try {
      await this.findOne(CPF);
      await this.prisma.patient.delete({ where: { CPF } });
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Paciente com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }
}
