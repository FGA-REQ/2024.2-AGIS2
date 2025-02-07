import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateHealthcareplanDto } from './dto/create-healthcareplan.dto';
import { UpdateHealthcareplanDto } from './dto/update-healthcareplan.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HealthcareplanService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(HealthcareplanService.name);

  async create(createHealthcareplanDto: CreateHealthcareplanDto) {
    try {
      const { name, patientId, contractNumber, expirationDate, company, CNPJ, companyPhoneNumber, companyEmail } = createHealthcareplanDto;
      await this.prisma.healthCarePlans.create({ data: { name, patientId, contractNumber, expirationDate, company, CNPJ, companyPhoneNumber, companyEmail } });
      this.logger.log(`Created healthcareplan ${name}, ${contractNumber}`);
      return;
    } catch (error) {
      this.logger.log(error);
      return new BadRequestException(error);
    }
  }

  async findAll() {
    return await this.prisma.healthCarePlans.findMany();
  }

  async findOne(id: string) {
    try {
      const healthCarePlan = await this.prisma.healthCarePlans.findUnique({ where: { id } });
      if (!healthCarePlan) {
        throw new NotFoundException(`Healthcareplan with id ${id} not found`);
      }
      return healthCarePlan;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async update(id: string, updateHealthcareplanDto: UpdateHealthcareplanDto) {
    try {
      const healthCarePlan = await this.findOne(id);
      if (!healthCarePlan) {
        this.logger.error(`Healthcareplan with id ${id} not found`);
        throw new NotFoundException(`Healthcareplan with id ${id} not found`);
      }
      await this.prisma.healthCarePlans.update({ where: { id }, data: updateHealthcareplanDto });
      this.logger.log(`Updated healthcareplan with id ${id}`);
      return;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async remove(id: string) {
    try {
      const healthCarePlan = await this.findOne(id);
      if (!healthCarePlan) {
        this.logger.error(`Healthcareplan with id ${id} not found`);
        throw new NotFoundException(`Healthcareplan with id ${id} not found`);
      }
      return await this.prisma.healthCarePlans.delete({ where: { id } });
    } catch (error) {

    }
  }
}
