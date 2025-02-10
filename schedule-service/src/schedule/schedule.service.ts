import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api.service';
import { WhatsappService } from '../../../whatsapp-service/src/whatsapp/whatsapp.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ScheduleService {
  constructor(
    private readonly prisma: PrismaService, 
    private readonly apiService: ApiService,
    private readonly whatsappService: WhatsappService,
  ) { }
  private readonly logger = new Logger(ScheduleService.name);


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

  async create(createScheduleDto: CreateScheduleDto) {
    try {
      const { doctorId, patientId, createdAt } = createScheduleDto;

      await this.findPatient(patientId);
      await this.findDoctors(doctorId);

      await this.findDoctorSchedule(doctorId, createdAt);
      await this.findPatientSchedule(patientId, createdAt);

      await this.prisma.schedule.create({ data: { doctorId, patientId, createdAt } });
      this.logger.log(`Agendamento de consulta com doutor ${doctorId} e horario ${createdAt} realizado com sucesso`);
      await this.sendConfirmation(patientId, doctorId, createdAt.toISOString());
      return;

    } catch (error) {
      this.logger.error(`Falha ao criar consulta: ${error.message}`);
      throw error;
    }
  }

  async findPatient(patientId: number) {
    try {
      const isThereAPatient = await this.apiService.get(`/patients/${patientId}`, 'AUTH');
      if (!isThereAPatient) throw new BadRequestException(`O paciente '${patientId}' não foi encontrado no banco de dados.`);
      
      return isThereAPatient;
    } catch (error) {
      this.logger.error(`Falha ao buscar paciente '${patientId}' no banco de dados.`);
      throw error;
    }
  }

  async findDoctors(doctorId: number) {
    try {
      const isThereADoctor = await this.apiService.get(`/doctors/${doctorId}`, 'AUTH');
      if (!isThereADoctor) throw new BadRequestException(`O médico '${doctorId}' não foi encontrado no banco de dados.`);

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
