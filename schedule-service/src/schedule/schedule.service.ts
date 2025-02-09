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

      await this.findPatient(patientId);
      await this.findDoctors(doctorId);

      await this.findDoctorSchedule(doctorId, createdAt);
      await this.findPatientSchedule(patientId, createdAt);

      await this.prisma.schedule.create({ data: { doctorId, patientId, createdAt } });
      this.logger.log(`Agendamento de consulta com doutor ${doctorId} e horario ${createdAt} realizado com sucesso`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao criar consulta: ${error.message}`);
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

  async findDoctors(doctorId: number) {
    try {
      const isThereADoctor = await this.apiService.get(`/doctors/${doctorId}`, '3001');
      if (!isThereADoctor) throw new BadRequestException('O médico informado não existe.');

      return isThereADoctor;
    } catch (error) {
      this.logger.error(`Falha ao buscar paciente '${doctorId}' no banco de dados.`);
      throw error;
    }
  }

  async findDoctorSchedule(doctorId: number, createdAt: Date) {
    try {
      const checkDoctorSchedule = await this.prisma.schedule.findFirst({ where: { doctorId, createdAt } });
      if (checkDoctorSchedule) throw new BadRequestException(`O médico já tem uma consulta neste horário.`);

      return checkDoctorSchedule;
    } catch (error) {
      this.logger.error(`Falha ao buscar consulta do Médico '${doctorId}' no banco de dados.`);
      throw error;
    }
  }

  async findPatientSchedule(patientId: number, createdAt: Date) {
    try {
      const checkPatientSchedule = await this.prisma.schedule.findFirst({ where: { patientId, createdAt } });
      if (checkPatientSchedule) throw new BadRequestException(`O paciente já tem uma consulta neste horário.`);

      return checkPatientSchedule;
    } catch (error) {
      this.logger.error(`Falha ao buscar consulta do Paciente '${patientId}' no banco de dados.`);
      throw error;
    }
  }

  async findAll() {
    try {
      return this.prisma.schedule.findMany();
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento de consulta: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const schedule = await this.prisma.schedule.findUnique({ where: { id } });
      if (!schedule) throw new BadRequestException("A consulta não foi encontrada");

      return schedule;
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento de consulta '${id}' no banco de dados.`);
      throw error;
    }
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    try {
      await this.findOne(id);

      const { doctorId, patientId, createdAt } = updateScheduleDto;

      if (doctorId) await this.findDoctors(doctorId);

      if (patientId) await this.findDoctors(patientId);

      if (doctorId && createdAt) await this.findDoctorSchedule(doctorId, createdAt);

      if (patientId && createdAt) await this.findPatientSchedule(patientId, createdAt);

      await this.prisma.schedule.update({ where: { id }, data: updateScheduleDto });
      this.logger.log(`Agendamento com ID ${id} atualizado com sucesso.`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao atualizar agendamento ${id}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      await this.prisma.schedule.delete({ where: { id } });
      this.logger.log(`Agendamento  removido com sucesso.`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao remover agendamento: ${error.message}`);
      throw error;
    }
  }



}
