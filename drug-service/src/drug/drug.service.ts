import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateDrugServiceDto } from './dto/create-drug.dto';
import { UpdateDrugServiceDto } from './dto/update-drug.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DrugServiceService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(DrugServiceService.name);

  async create(createDrugServiceDto: CreateDrugServiceDto) {
    try {
      const { name, actionSite } = createDrugServiceDto;

      await this.prisma.drug.create({ data: { name, actionSite } });
      this.logger.log(`Remédio ${name} criado com sucesso`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return `This action returns all drugService`;
  }

  findOne(id: string) {
    return `This action returns a #${id} drugService`;
  }

  async update(id: string, updateDrugServiceDto: UpdateDrugServiceDto) {
    try {
      const drug = await this.prisma.drug.findUnique({ where: { id } });
      if (!drug) throw new NotFoundException(`Remédio com ${name} não encontrado`);

      await this.prisma.drug.update({ where: { id }, data: updateDrugServiceDto });
      this.logger.log(`Remédio ${name} atualizado com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Remédio com nome ${name}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const drug = await this.prisma.drug.findUnique({ where: { id } });
      if (!drug) throw new NotFoundException(`Remédio com ${name} não encontrado`);

      await this.prisma.drug.delete({ where: { id } });
      this.logger.log(`Remédio ${name} removido com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Remédio com nome ${name}: ${error.message}`);
      throw error;
    }
  }
}

