import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateDrugscheduleDto } from './dto/create-drugschedule.dto';
import { UpdateDrugscheduleDto } from './dto/update-drugschedule.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api.service';

@Injectable()
export class DrugscheduleService {
  constructor(private readonly prisma: PrismaService, private readonly apiService: ApiService) { }
  private readonly logger = new Logger(DrugscheduleService.name);


  async create(createDrugscheduleDto: CreateDrugscheduleDto) {
    try {
      const { drugId, numberOfDays, initialDate, drugBreak, patientId } = createDrugscheduleDto;

      await this.findDrug(drugId);
      await this.findPatient(patientId);
      await this.findDrugSchedule(patientId, drugId, initialDate);

      await this.prisma.drugSchedule.create({ data: { drugId, numberOfDays, initialDate, drugBreak, patientId } });
      this.logger.log(`Agendamento de remédio realizado com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao criar agendamento: ${error.message}`);
      throw error;
    }
  }

  async findDrug(drugId: string) {
    try {
      const isThereADrug = await this.apiService.get(`/drug-service/${drugId}`, '3002');
      if (!isThereADrug) throw new BadRequestException(`O medicamento '${drugId}' não foi encontrado no banco de dados.`);

      return isThereADrug;
    } catch (error) {
      this.logger.error(`Falha ao buscar medicamento '${drugId}' no banco de dados.`);
      throw error;
    }
  }

  async findPatient(patientId: number) {
    try {
      const isThereAPatient = await this.apiService.get(`/patients/${patientId}`, '3001');
      if (!isThereAPatient) throw new BadRequestException(`O paciente '${patientId}' não foi encontrado no banco de dados.`);

      return isThereAPatient;
    } catch (error) {
      this.logger.error(`Falha ao buscar paciente '${patientId}' no banco de dados.`);
      throw error;
    }
  }

  async findDrugSchedule(patientId: number, drugId: string, initialDate: Date) {
    try {
      const isThereADrugSchedule = await this.prisma.drugSchedule.findFirst({
        where: { patientId, drugId, initialDate },
      });
      if (isThereADrugSchedule) {
        throw new BadRequestException(
          `O paciente '${patientId}' já tem um agendamento para o medicamento '${drugId}' neste horário.`,
        );
      }
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento '${patientId}, ${drugId} e ${initialDate}' no banco de dados.`);
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

      const { drugId, numberOfDays, initialDate, drugBreak, patientId } = updateDrugscheduleDto;

      if (drugId) await this.findDrug(drugId);
      if (patientId) await this.findPatient(patientId);
      if (patientId && drugId && initialDate) await this.findDrugSchedule(patientId, drugId, initialDate);

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
