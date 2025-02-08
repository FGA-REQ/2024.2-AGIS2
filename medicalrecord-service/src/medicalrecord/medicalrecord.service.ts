import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateMedicalrecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalrecordDto } from './dto/update-medicalrecord.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MedicalrecordService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(MedicalrecordService.name);

  async create(createMedicalrecordDto: CreateMedicalrecordDto) {
    try {
      const { id, age, weight, height, recordText, alergies, createdAt } = createMedicalrecordDto;

      await this.prisma.medicalRecords.create({ data: { id, age, weight, height, recordText, alergies, createdAt } });
      this.logger.log(`Prontuário médico criado com sucesso`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return `This action returns all medicalrecord`;
  }

  findOne(id: string) {
    return `This action returns a #${id} medicalrecord`;
  }

  async update(id: string, updateMedicalrecordDto: UpdateMedicalrecordDto) {
    try {
      const medicalRecords = await this.prisma.medicalRecords.findUnique({ where: { id } });
      if (!medicalRecords) throw new NotFoundException(`Prontuário médico não encontrado`);

      await this.prisma.medicalRecords.update({ where: { id }, data: updateMedicalrecordDto });
      this.logger.log(`Prontuário médico  atualizado com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Prontuário médico : ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const medicalRecords = await this.prisma.medicalRecords.findUnique({ where: { id } });
      if (!medicalRecords) throw new NotFoundException(`Prontuário médico não encontrado`);

      await this.prisma.medicalRecords.delete({ where: { id } });
      this.logger.log(`Prontuário médico removido com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Prontuário médico: ${error.message}`);
      throw error;
    }
  }
}
