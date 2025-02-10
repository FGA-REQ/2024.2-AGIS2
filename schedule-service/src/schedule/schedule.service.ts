import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api/api.service';


@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService, private readonly api: ApiService) { }
  private readonly logger = new Logger(ScheduleService.name);

  async create(createScheduleDto: CreateScheduleDto, authHeader: string) {
    try {
      const { doctorCRM, patientCPF, scheduledAt } = createScheduleDto;
      this.logger.log([doctorCRM, patientCPF, scheduledAt]);
      const doctor = await this.api.getDoctor(doctorCRM, authHeader);
      this.logger.log(`Médico ${doctor.data.name} encontrado.`);
      const patient = await this.api.getPatient(patientCPF);

      if (!doctor) throw new BadRequestException(`Médico com CRM ${doctorCRM} não encontrado.`);
      if (!patient) throw new BadRequestException(`Paciente com CPF ${patientCPF} não encontrado.`);

      this.logger.log(`Paciente ${patient.data.name} encontrado.`);

      await this.findDoctorSchedule(doctorCRM, scheduledAt);
      await this.findPatientSchedule(patientCPF, scheduledAt);

      await this.prisma.schedule.create({ data: createScheduleDto });
      this.logger.log(`Agendamento de consulta com doutor ${doctorCRM} e horario ${scheduledAt} realizado com sucesso`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao criar consulta: ${error.message}`);
      throw error.message;
    }
  }

  async findDoctorSchedule(doctorCRM: string, scheduledAt: Date) {
    try {
      const checkDoctorSchedule = await this.prisma.schedule.findFirst({ where: { doctorCRM, scheduledAt } });
      if (checkDoctorSchedule) throw new BadRequestException(`O médico já tem uma consulta neste horário.`);

      return checkDoctorSchedule;
    } catch (error) {
      this.logger.error(`Falha ao buscar consulta do Médico '${doctorCRM}' no banco de dados.`);
      throw error;
    }
  }

  async findPatientSchedule(patientCPF: string, scheduledAt: Date) {
    try {
      const checkPatientSchedule = await this.prisma.schedule.findFirst({ where: { patientCPF, scheduledAt } });
      if (checkPatientSchedule) throw new BadRequestException(`O paciente já tem uma consulta neste horário.`);

      return checkPatientSchedule;
    } catch (error) {
      this.logger.error(`Falha ao buscar consulta do Paciente '${patientCPF}' no banco de dados.`);
      throw error;
    }
  }

  async findAll(authHeader: string) {
    try {
      let response: Array<{ doctorName: string; patientName: string; doctorCRM: string; patientCPF: string; id: string; createdAt: Date, scheduledAt: Date }> = [];
      const schedules = await this.prisma.schedule.findMany();
      for (let schedule of schedules) {
        const doctor = await this.api.getDoctor(schedule.doctorCRM, authHeader);
        const patient = await this.api.getPatient(schedule.patientCPF);
        response.push({ ...schedule, doctorName: doctor.data.name, patientName: patient.data.name });
      }
      return response
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento de consulta: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      let response: { doctorName: string; patientName: string; doctorCRM: string; patientCPF: string; id: string; scheduledAt: Date } = {
        doctorName: '',
        patientName: '',
        doctorCRM: '',
        patientCPF: '',
        id: '',
        scheduledAt: new Date()
      };

      const schedule = await this.prisma.schedule.findUnique({ where: { id } });
      if (!schedule) throw new BadRequestException(`Agendamento de consulta não encontrado`);
      response.doctorName = (await this.api.getDoctor(schedule.doctorCRM, '')).data.name;
      response.patientName = (await this.api.getPatient(schedule.patientCPF)).data.name;
      response.doctorCRM = schedule.doctorCRM;
      response.patientCPF = schedule.patientCPF;
      response.id = schedule.id;
      response.scheduledAt = schedule.scheduledAt;
      return response;
    } catch (error) {
      this.logger.error(`Falha ao buscar agendamento de consulta '${id}' no banco de dados.`);
      throw error;
    }
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    try {
      await this.findOne(id);
      await this.prisma.schedule.update({ where: { id }, data: updateScheduleDto });
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
