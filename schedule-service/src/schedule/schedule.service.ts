import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api.service';


@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService, private readonly apiService: ApiService) { }
  private readonly logger = new Logger(ScheduleService.name);

  async create(createScheduleDto: CreateScheduleDto) {
    try {
      const { doctorId, patientId, createdAt } = createScheduleDto;

      const isThereADoctor = await this.checkDPExists(doctorId, 'doctors');
      const isThereAPatient = await this.checkDPExists(patientId, 'patients');

      if (!isThereADoctor) throw new BadRequestException('O médico informado não existe.');
      if (!isThereAPatient) throw new BadRequestException('O paciente informado não existe.');

      const checkDoctorSchedule = await this.prisma.schedule.findFirst({ where: { doctorId, createdAt } });
      if (checkDoctorSchedule) throw new BadRequestException(`O médico já tem uma consulta neste horário.`);

      const checkPatientSchedule = await this.prisma.schedule.findFirst({ where: { patientId, createdAt } });
      if (checkPatientSchedule) throw new BadRequestException(`O paciente já tem uma consulta neste horário.`);

      await this.prisma.schedule.create({ data: { doctorId, patientId, createdAt } });
      this.logger.log(`Agendamento de consulta com doutor ${doctorId} e horario ${createdAt} realizado com sucesso`);
      return;


    } catch (error) {
      this.logger.error(`Falha ao criar consulta: ${error.message}`);
      throw error;
    }
  }

  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  async remove(id: string) {
    try {
      const schedule = await this.prisma.schedule.findUnique({ where: { id } });

      if (!schedule) throw new BadRequestException(`O agendamento com ID ${id} não foi encontrado.`);

      await this.prisma.schedule.delete({ where: { id } });
      this.logger.log(`Agendamento  removido com sucesso.`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao remover agendamento: ${error.message}`);
      throw error;
    }
  }

  private async checkDPExists(DPId: number, existingDP: 'doctors' | 'patients'): Promise<boolean> {
    const path = `${existingDP}/${DPId}`;
    const data = await this.apiService.get(path);

    return !!data?.id;
  }

}
