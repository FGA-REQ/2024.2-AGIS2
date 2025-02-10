import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api/api.service';
import { WhatsappService } from '../../../whatsapp-service/src/whatsapp/whatsapp.service';
import { Cron, CronExpression } from '@nestjs/schedule';


@Injectable()
export class ScheduleService {
  constructor(
    private readonly prisma: PrismaService, 
    private readonly api: ApiService,
    private readonly prisma: PrismaService, 
    private readonly apiService: ApiService,
    private readonly whatsappService: WhatsappService,
  ) { }
  private readonly logger = new Logger(ScheduleService.name);

  async create(createScheduleDto: CreateScheduleDto, authHeader: string) {
    try {
      const { doctorCRM, patientCPF, scheduledAt } = createScheduleDto;
      const doctor = await this.api.getDoctor(doctorCRM, authHeader);
      const patient = await this.api.getPatient(patientCPF);
      if (!doctor) throw new BadRequestException(`Médico com CRM ${doctorCRM} não encontrado.`);
      if (!patient) throw new BadRequestException(`Paciente com CPF ${patientCPF} não encontrado.`);
      await this.findDoctorSchedule(doctorCRM, scheduledAt);
      await this.findPatientSchedule(patientCPF, scheduledAt);
      await this.prisma.schedule.create({ data: createScheduleDto });
      this.logger.log(`Agendamento de consulta com doutor ${doctorCRM} e horario ${scheduledAt} realizado com sucesso`);
      this.logger.log(`Agendamento de consulta com doutor ${doctorCRM} e horario ${scheduledAt} realizado com sucesso`);
      await this.sendConfirmation(patientId, doctorId, createdAt.toISOString());
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
    
  @Cron(CronExpression.EVERY_30_MINUTES)
  async handleCron() {
    const now = new Date();
    const twentyFourHoursBefore = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 horas depois
    const twoHoursBefore = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 horas depois

    const upcomingSchedules = await this.prisma.schedule.findMany({
      where: {
        createdAt: {
          gte: now,
        },
      },
    });

    for (const schedule of upcomingSchedules) {
      const timeDifference = new Date(schedule.createdAt).getTime() - now.getTime();

      // Verificando se a consulta está marcada para 24 horas ou 2 horas antes
      if (
        timeDifference <= twentyFourHoursBefore.getTime() &&
        timeDifference > 0
      ) {
        await this.sendReminder(schedule.patientId, schedule.doctorId, schedule.createdAt, '24h');
      }

      if (
        timeDifference <= twoHoursBefore.getTime() &&
        timeDifference > 0
      ) {
        await this.sendReminder(schedule.patientId, schedule.doctorId, schedule.createdAt, '2h');
      }
    }
  }
  async sendConfirmation(patientId: number, doctorId: number, createdAt: string) {
    try {
      const phone = await this.getPhoneNumber(patientId);
      const doctor = await this.apiService.get(`/doctors/${doctorId}`, 'AUTH');
      const message = `Olá, sua consulta com o doutor ${doctor.name} foi agendada para o dia ${createdAt}. Confirme seu comparecimento!`;

      await this.whatsappService.sendMessage(phone, message);
      this.logger.log(`Confirmação enviada para o paciente ${patientId} no WhatsApp`);
    } catch (error) {
      this.logger.error(`Erro ao enviar confirmação via WhatsApp: ${error.message}`);
    }
  }

  async sendReminder(patientId: number, doctorId: number, createdAt: Date, timeFrame: string) {
    try {
      const phone = await this.getPhoneNumber(patientId);
      const doctor = await this.apiService.get(`/doctors/${doctorId}`, 'AUTH');

      let message = '';
      if (timeFrame === '24h') {
        message = `Olá! Sua consulta com o doutor ${doctor.name} está marcada para amanhã, às ${createdAt.toISOString()}.`;
      } else if (timeFrame === '2h') {
        message = `Olá! Sua consulta com o doutor ${doctor.name} será daqui a 2 horas, às ${createdAt.toISOString()}. Não perca!`;
      }

      await this.whatsappService.sendMessage(phone, message);
      this.logger.log(`Lembrete enviado para o paciente ${patientId} no WhatsApp`);
    } catch (error) {
      this.logger.error(`Erro ao enviar lembrete via WhatsApp: ${error.message}`);
    }
  }

  async getPhoneNumber(patientId: number): Promise<string> {
    const patient = await this.findPatient(patientId);

    if (!patient) {
      throw new Error(`Paciente com ID ${patientId} não encontrado`);
    }

    return patient.telephone;
  }
}
