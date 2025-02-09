import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api/api.service';

@Injectable()
export class PrescriptionService {
  constructor(private readonly prisma: PrismaService, private readonly api: ApiService) { }
  private readonly logger = new Logger(PrescriptionService.name);

  async create(createPrescriptionDto: CreatePrescriptionDto, authHeader: string) {
    try {
      const { content, patientCPF, doctorCRM } = createPrescriptionDto;
      const patient = await this.api.getPatient(patientCPF);
      const token = authHeader.split(' ')[1];
      const doctor = await this.api.getDoctor(doctorCRM, token);
      if (!patient) throw new NotFoundException(`Paciente com CPF ${patientCPF} não encontrado`);
      if (!doctor) throw new NotFoundException(`Médico com CRM ${doctorCRM} não encontrado`);
      await this.prisma.prescription.create({ data: { content, patientCPF, doctorCRM } });
      this.logger.log(`Receita médica criada com sucesso por ${doctorCRM}`);
      return;
    } catch (error) {
      this.logger.log(error);
      throw error.message;
    }
  }

  async findAll(authToken: string) {
    try {
      let response: Array<{ patientName: string; doctorName: string; content: string; patientCPF: string; doctorCRM: string; id: string; createdAt: Date }> = [];
      const prescriptions = await this.prisma.prescription.findMany();
      const token = authToken.split(' ')[1];
      for (let prescription of prescriptions) {
        const patient = await this.api.getPatient(prescription.patientCPF);
        const doctor = await this.api.getDoctor(prescription.doctorCRM, token);
        response.push({ ...prescription, patientName: patient.data.name, doctorName: doctor.data.name });
      }
      this.logger.log(`Receitas médicas encontradas`);
      return response;
    } catch (error) {
      this.logger.error(`Falha ao buscar receitas: ${error.message}`);
    }
  }

  async findOne(id: string, authHeader: string) {
    try {
      let response: { patientName: string; doctorName: string; content: string; patientCPF: string; doctorCRM: string; id: string; createdAt?: Date } = {
        patientName: '',
        doctorName: '',
        content: '',
        patientCPF: '',
        doctorCRM: '',
        id: ''
      };

      const prescription = await this.prisma.prescription.findUnique({ where: { id } });
      if (!prescription) throw new NotFoundException(`Receita médica não encontrada`);
      const token = authHeader.split(' ')[1];
      response.doctorName = (await this.api.getDoctor(prescription.doctorCRM, token)).data.name;
      response.patientName = (await this.api.getPatient(prescription.patientCPF)).data.name;
      response.content = prescription.content;
      response.patientCPF = prescription.patientCPF;
      response.doctorCRM = prescription.doctorCRM;
      response.id = prescription.id;
      response.createdAt = prescription.createdAt;
      return response;
    } catch (error) {
      this.logger.error(`Falha ao buscar receita médica com ID ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updatePrescriptionDto: UpdatePrescriptionDto, authHeader: string) {
    try {
      const token = authHeader.split(' ')[1];
      await this.findOne(id, token);

      await this.prisma.prescription.update({ where: { id }, data: updatePrescriptionDto });
      this.logger.log(`Receita médica atualizada com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Receita médica: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string, authHeader: string) {
    try {
      const token = authHeader.split(' ')[1];
      await this.findOne(id, token);

      await this.prisma.prescription.delete({ where: { id } });
      this.logger.log(`Receita médica removida com sucesso`);
      return;

    } catch (error) {
      this.logger.error(`Falha ao excluir Receita médica: ${error.message}`);
      throw error;
    }
  }
}
