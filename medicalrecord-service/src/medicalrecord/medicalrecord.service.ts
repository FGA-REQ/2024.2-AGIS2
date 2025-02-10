import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateMedicalrecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalrecordDto } from './dto/update-medicalrecord.dto';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/api/api.service';

@Injectable()
export class MedicalrecordService {
  constructor(private readonly prisma: PrismaService, private readonly api: ApiService) { }
  private readonly logger = new Logger(MedicalrecordService.name);

  async create(createMedicalrecordDto: CreateMedicalrecordDto, authHeader: string) {
    try {
      const { age, doctorCRM, patientCPF, weight, height, recordText, alergies } = createMedicalrecordDto;
      console.log('backend', age, doctorCRM, patientCPF, weight, height, recordText, alergies);
      const patient = await this.api.getPatient(patientCPF);
      const token = authHeader.split(' ')[1];
      const doctor = await this.api.getDoctor(doctorCRM, token);
      if (!patient) throw new NotFoundException(`Paciente com CPF ${patientCPF} não encontrado`);
      if (!doctor) throw new NotFoundException(`Médico com CRM ${doctorCRM} não encontrado`);
      await this.prisma.medicalRecords.create({ data: { age, doctorCRM, patientCPF , weight, height, recordText, alergies } });
      this.logger.log(`Prontuário médico criado com sucesso`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  async findAll(authHeader: string) {
    try {
      let response: Array<{ patientName: string; doctorName: string; age: number; weight: number; height: number; recordText: string; alergies: string; patientCPF: string; doctorCRM: string; id: string; createdAt: Date }> = [];
      const medicalRecords = await this.prisma.medicalRecords.findMany();
      const token = authHeader.split(' ')[1];
      for (let medicalRecord of medicalRecords) {
        const patient = await this.api.getPatient(medicalRecord.patientCPF);
        const doctor = await this.api.getDoctor(medicalRecord.doctorCRM, token);
        response.push({ ...medicalRecord, patientName: patient.data.name, doctorName: doctor.data.name });
      }
      return response;
    } catch (error) {
      this.logger.error(`Falha ao buscar Prontuários Médicos: ${error.message}`);
    }
  }

  async findOne(id: string, authHeader: string) {
    try {
      let response: { patientName: string; doctorName: string; age: number; weight: number; height: number; recordText: string; alergies: string; patientCPF: string; doctorCRM: string; id: string; createdAt?: Date } = {
        patientName: '',
        doctorName: '',
        age: 0,
        weight: 0,
        height: 0,
        recordText: '',
        alergies: '',
        patientCPF: '',
        doctorCRM: '',
        id: ''
      };
      const medicalRecord = await this.prisma.medicalRecords.findUnique({ where: { id } });
      if (!medicalRecord) throw new NotFoundException(`Prontuário Médico não encontrado`);
      const token = authHeader.split(' ')[1];
      response.doctorName = (await this.api.getDoctor(medicalRecord.doctorCRM, token)).data.name;
      response.patientName = (await this.api.getPatient(medicalRecord.patientCPF)).data.name;
      response.age = medicalRecord.age;
      response.weight = medicalRecord.weight;
      response.height = medicalRecord.height;
      response.recordText = medicalRecord.recordText;
      response.alergies = medicalRecord.alergies;
      response.patientCPF = medicalRecord.patientCPF;
      response.doctorCRM = medicalRecord.doctorCRM;
      response.id = medicalRecord.id;
      response.createdAt = medicalRecord.createdAt;
      return response;
    } catch (error) {
      this.logger.error(`Falha ao buscar Prontuário Médico com ID ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateMedicalrecordDto: UpdateMedicalrecordDto, authHeader: string) {
    try {
      const token = authHeader.split(' ')[1];
      await this.findOne(id, token);

      await this.prisma.medicalRecords.update({ where: { id }, data: updateMedicalrecordDto });
      this.logger.log(`Prontuário médico com id ${id} atualizado com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Prontuário médico : ${error.message}`);
      throw error;
    }
  }

  async remove(id: string, authHeader: string) {
    try {
      const token = authHeader.split(' ')[1];
      await this.findOne(id, token);

      await this.prisma.medicalRecords.delete({ where: { id } });
      this.logger.log(`Prontuário médico de id ${id} removido com sucesso`);
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Prontuário médico: ${error.message}`);
      throw error;
    }
  }
}
