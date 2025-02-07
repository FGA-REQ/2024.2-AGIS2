import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(AdminService.name);

  async create(createAdminDto: CreateAdminDto) {
    try {
      const { name, email, CPF, password } = createAdminDto;
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      await this.prisma.admin.create({ data: { email, name, CPF, hashedPassword } });
      this.logger.log(`Created admin ${name}`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  async update(CPF: string, updateAdminDto: UpdateAdminDto) {
    try {
      const admin = await this.prisma.admin.findUnique({ where: { CPF } });
      if (!admin) {
        throw new NotFoundException(`Usuário com CPF ${CPF} não encontrado`);
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(updateAdminDto.password, salt);

      const payload = { ...(({ password, ...all }) => all)(updateAdminDto), hashedPassword };
      await this.prisma.admin.update({ where: { CPF: CPF }, data: payload });
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar Usuário com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }

  async remove(CPF: string) {
    try {
      const admin = await this.prisma.admin.findUnique({ where: { CPF } });
      if (!admin) {
        throw new NotFoundException(`Usuáario com CPF ${CPF} não encontrado`);
      }

      await this.prisma.admin.delete({ where: { CPF } });
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Usuáario com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }
}
