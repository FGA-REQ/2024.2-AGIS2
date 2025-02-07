import { All, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { throwError } from 'rxjs';

@Injectable()
export class DoctorsService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(DoctorsService.name);

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      const { email, name, telephone, birthday, CRM, specialty, password, CPF } = createDoctorDto;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.prisma.doctor.create({ data: { email, name, telephone, birthday, CRM, specialty: specialty, hashedPassword, CPF } });
      this.logger.log(`Created doctor ${name}, ${CRM}`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return this.prisma.doctor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  async update(CRM: string, updateDoctorDto: UpdateDoctorDto) {
    try {
      const doctor = await this.prisma.doctor.findUnique({ where: { CRM } });
      if (!doctor) {
        throw new NotFoundException(`Doutor com CRM ${CRM} não encontrado`);
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(updateDoctorDto.password, salt);
      
      const payload = {...(({password, ...all}) => all)(updateDoctorDto), hashedPassword};
      await this.prisma.doctor.update({ where: { CRM: CRM }, data: payload });
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Doutor com CRM ${CRM}: ${error.message}`);
      throw error;
    }
  }

  async remove(CRM: string) {
    try {
      const doctor = await this.prisma.doctor.findUnique({ where: { CRM } });
      if (!doctor) {
        throw new NotFoundException(`Doutor com CRM ${CRM} não encontrado`);
      }

      await this.prisma.doctor.delete({ where: { CRM } });
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Doutor com CRM ${CRM}: ${error.message}`);
      throw error;
    }
  }

}
