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

      const isThereADrug = await this.apiService.get(`http://localhost:3000/drug/${drugId}`);
      if (!isThereADrug) throw new BadRequestException(`O medicamento '${drugId}' não foi encontrado no banco de dados.`);

      const isThereAPatient = await this.apiService.get(`http://localhost:3000/patient/${patientId}`);
      if (!isThereAPatient) throw new BadRequestException(`O paciente '${patientId}' não foi encontrado no banco de dados.`);

      const isThereADrugSchedule = await this.prisma.drugSchedule.findFirst({ where: { patientId, drugId, initialDate } });
      if (isThereADrugSchedule) throw new BadRequestException(`O paciente '${isThereAPatient.id}' já tem um agendamento para o medicamento '${isThereADrug.id}' neste horário.`,);

      await this.prisma.drugSchedule.create({ data: { drugId, numberOfDays, initialDate, drugBreak, patientId } });
      this.logger.log(`Agendamento de remédio realizado com sucesso`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao criar agendamento: ${error.message}`);
      throw error;
    }

  }

  findAll() {
    return `This action returns all drugschedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drugschedule`;
  }

  async update(id: number, updateDrugscheduleDto: UpdateDrugscheduleDto) {
    try {
      const drugSchedule = await this.prisma.drugSchedule.findUnique({ where: { id } });
      if (!drugSchedule) throw new BadRequestException(`O agendamento de remédio com ID ${id} não foi encontrado.`)

      const { drugId, numberOfDays, initialDate, drugBreak, patientId } = updateDrugscheduleDto;

      if (drugId) {
        const isThereADrug = await this.apiService.get(`http://localhost:3000/patient/${drugId}`);
        if (!isThereADrug) throw new BadRequestException(`O remédio informado não existe`);
      }

      if (patientId) {
        const isThereAPatient = await this.apiService.get(`http://localhost:3000/patient/${patientId}`);
        if (!isThereAPatient) throw new BadRequestException(`O paciente informado não existe`);
      }

      if (patientId && drugId && initialDate) {
        const checkDrugSchedule = await this.prisma.drugSchedule.findFirst({
          where: { patientId, drugId, initialDate, NOT: { id } }
        });
        if (checkDrugSchedule) throw new BadRequestException(`Já existe um agendamento para este paciente e medicamento neste horário.`);
      }

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
      const drugSchedule = await this.prisma.drugSchedule.findUnique({ where: { id } });
      if (!drugSchedule) throw new BadRequestException(`O agendamento de remédio com ID ${id} não foi encontrado.`);

      await this.prisma.drugSchedule.delete({ where: { id } });
      this.logger.log(`agendamento de remédio com ID ${id} removido com sucesso.`);
    } catch (error) {
      this.logger.error(`Falha ao remover agendamento de remédio ${id}: ${error.message}`);
      throw error;
    }
  }

}
