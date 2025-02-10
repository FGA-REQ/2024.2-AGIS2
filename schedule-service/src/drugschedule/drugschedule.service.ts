import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateDrugscheduleDto } from './dto/create-drugschedule.dto';
import { UpdateDrugscheduleDto } from './dto/update-drugschedule.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api/api.service';

@Injectable()
export class DrugscheduleService {
  constructor(private readonly prisma: PrismaService, private readonly api: ApiService) { }
  private readonly logger = new Logger(DrugscheduleService.name);

  async create(createDrugscheduleDto: CreateDrugscheduleDto) {
    try {
      const { drugId, initialDate, patientCPF } = createDrugscheduleDto;
      await this.api.getDrug(drugId);
      await this.api.getPatient(patientCPF);
      await this.findDrugSchedule(patientCPF, drugId, initialDate);
      await this.prisma.drugSchedule.create({ data: {...createDrugscheduleDto} });
      this.logger.log(`Agendamento de remédio realizado com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao criar agendamento: ${error.message}`);
      throw error;
    }
  }

  async findDrugSchedule(patientCPF: string, drugId: string, initialDate: Date) {
    try {
      const isThereADrugSchedule = await this.prisma.drugSchedule.findFirst({
        where: { patientCPF, drugId, initialDate },
      });
      if (isThereADrugSchedule) {
        throw new BadRequestException(
          `O paciente '${patientCPF}' já tem um agendamento para o medicamento '${drugId}' neste horário.`,
        );
      }
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento '${patientCPF}, ${drugId} e ${initialDate}' no banco de dados.`);
      throw error;
    }
  }

  async findAll() {
    try {
      return this.prisma.drugSchedule.findMany();
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento de remédio: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const drugSchedule = await this.prisma.drugSchedule.findUnique({ where: { id } });
      if (!drugSchedule) throw new BadRequestException(`O agendamento de remédio com ID ${id} não foi encontrado.`);
      return drugSchedule;
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento '${id}' no banco de dados.`);
      throw error;
    }
  }

  async update(id: number, updateDrugscheduleDto: UpdateDrugscheduleDto) {
    try {
      await this.findOne(id);

      const { drugId, initialDate, patientCPF } = updateDrugscheduleDto;

      if (drugId) await this.api.getDrug(drugId);
      if (patientCPF) await this.api.getPatient(patientCPF);
      if (patientCPF && drugId && initialDate) await this.findDrugSchedule(patientCPF, drugId, initialDate);

      const updatedSchedule = await this.prisma.drugSchedule.update({ where: { id }, data: updateDrugscheduleDto });
      this.logger.log(`Agendamento com ID ${id} atualizado com sucesso.`);
      return updatedSchedule;

    } catch (error) {
      this.logger.error(`Falha ao atualizar agendamento ${id}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.findOne(id);

      await this.prisma.drugSchedule.delete({ where: { id } });
      this.logger.log(`Agendamento de remédio com ID ${id} removido com sucesso.`);

    } catch (error) {
      this.logger.error(`Falha ao remover agendamento de remédio ${id}: ${error.message}`);
      throw error;
    }
  }
}
