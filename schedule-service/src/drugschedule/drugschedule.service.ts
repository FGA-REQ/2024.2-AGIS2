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

  update(id: number, updateDrugscheduleDto: UpdateDrugscheduleDto) {
    return `This action updates a #${id} drugschedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} drugschedule`;
  }
}
