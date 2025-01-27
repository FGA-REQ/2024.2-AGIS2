import { Injectable, Logger } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DoctorsService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(DoctorsService.name);

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      const { email, name, telephone, birthday, CRM, specialty, password } = createDoctorDto;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.prisma.doctor.create({ data: { email, name, telephone, birthday, CRM, specialty: specialty, hashedPassword } });
      this.logger.log(`Created doctor ${name}, ${CRM}`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return this.prisma.doctor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} doctor`;
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return `This action updates a #${id} doctor`;
  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
