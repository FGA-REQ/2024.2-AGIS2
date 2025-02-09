import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersHelper } from 'src/helpers/users.helper';


@Injectable()
export class DoctorsService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(DoctorsService.name);

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      let { email, name, telephone, birthday, CRM, specialty, password, CPF } = createDoctorDto;
      CPF = UsersHelper.validateCPFOrCNPJ(CPF);
      const hashedPassword = await UsersHelper.hashPassword(password);
      await this.prisma.doctor.create({ data: { email, name, telephone, birthday, CRM, specialty: specialty, hashedPassword, CPF } });
      this.logger.log(`Created doctor ${name}, ${CRM}`);
      return;
    } catch (error) {
      this.logger.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.doctor.findMany();
    } catch (error) {
      this.logger.error(`Falha ao buscar Doutores: ${error.message}`);
      throw error;
    }
  }

  async findOne(CRM: string) {
    try {
      const doctor = await this.prisma.doctor.findUnique({ where: { CRM } });
      if (!doctor) {
        throw new NotFoundException(`Doutor com CRM ${CRM} não encontrado`);
      }
      return doctor;
    } catch (error) {
      this.logger.error(`Falha ao buscar médico com CRM ${CRM}: ${error.message}`);
      throw error;
    }
  }

  async update(CRM: string, updateDoctorDto: UpdateDoctorDto) {
    try {
      await this.findOne(CRM);
      let hashedPassword: string | undefined;
      if (updateDoctorDto.password) {
        hashedPassword = await UsersHelper.hashPassword(updateDoctorDto.password);
      }
      const payload = { ...(({ password, ...all }) => all)(updateDoctorDto), ...(hashedPassword && { hashedPassword }) };
      await this.prisma.doctor.update({ where: { CRM: CRM }, data: payload });
      this.logger.log(`Updated doctor ${CRM}`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar médico com CRM ${CRM}: ${error.message}`);
      throw error;
    }
  }

  async remove(CRM: string) {
    try {
      await this.findOne(CRM);
      await this.prisma.doctor.delete({ where: { CRM } });
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Doutor com CRM ${CRM}: ${error.message}`);
      throw error;
    }
  }
}
