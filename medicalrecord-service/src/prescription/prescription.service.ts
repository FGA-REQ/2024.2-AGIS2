import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PrescriptionService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(PrescriptionService.name);

  async create(createPrescriptionDto: CreatePrescriptionDto) {
    try {
      const { id, content, createdAt } = createPrescriptionDto;

      await this.prisma.prescription.create({ data: { id, content, createdAt } });
      this.logger.log(`Receita médica criada com sucesso`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  async findAll() {
    try {
      return this.prisma.prescription.findMany();
    } catch (error) {
      this.logger.error(`Falha ao buscar receitas: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const prescription = await this.prisma.prescription.findUnique({ where: { id } });
      if (!prescription) throw new NotFoundException(`Receita médica não encontrada`);

      return prescription;
    } catch (error) {
      this.logger.error(`Falha ao buscar receita médica com ID ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updatePrescriptionDto: UpdatePrescriptionDto) {
    try {
      await this.findOne(id);

      await this.prisma.prescription.update({ where: { id }, data: updatePrescriptionDto });
      this.logger.log(`Receita médica atualizada com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Receita médica: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      await this.prisma.prescription.delete({ where: { id } });
      this.logger.log(`Receita médica removida com sucesso`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao excluir Receita médica: ${error.message}`);
      throw error;
    }
  }
}
