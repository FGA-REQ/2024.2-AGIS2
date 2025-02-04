import { Injectable, Logger, NotFoundException } from '@nestjs/common';
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
      const { email, name, telephone, birthday, CRM, specialty, password } = createDoctorDto;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.prisma.doctor.create({ data: { email, name, telephone, birthday, CRM, specialty: specialty, hashedPassword } });
      this.logger.log(`Created doctor ${name}, ${CRM}`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return `This action returns all doctors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  async update(id: number, updateDoctorDto: UpdateDoctorDto) {
    try {
      const doctor = await this.prisma.doctor.findUnique({ where : { id }});
      if (!doctor) {
        throw new NotFoundException(`Doutor com id ${id} não encontrado`)
      }

      return await this.prisma.doctor.update({
        where: { id },
        data: updateDoctorDto,
      });
    } catch (error) {
      this.logger.error(`Não foi possível atualizar o médico com o id: ${ id }: ${error.message}`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const doctor = await this.prisma.doctor.findUnique({ where: { id } });
      if (!doctor) {
        throw new NotFoundException(`Doutor com id ${id} não encontrado`);
      }
      
      return await this.prisma.doctor.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`Falha ao excluir Doutor com id ${ id }: ${error.message}`);
      throw error;
    }
  }
}
