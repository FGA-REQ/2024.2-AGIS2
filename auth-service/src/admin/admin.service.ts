import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersHelper } from 'src/helpers/users.helper';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) { }
  private readonly logger = new Logger(AdminService.name);

  async create(createAdminDto: CreateAdminDto) {
    try {
      let { name, email, CPF, password } = createAdminDto;
      CPF = UsersHelper.validateCPFOrCNPJ(CPF);
      const hashedPassword = await UsersHelper.hashPassword(password);
      await this.prisma.admin.create({ data: { email, name, CPF, hashedPassword } });
      this.logger.log(`Created admin ${name}`);
      return;
    } catch (error) {
      this.logger.log(error);
    }
  }

  async findAll() {
    try {
      return this.prisma.admin.findMany();
    } catch (error) {
      this.logger.error(`Falha ao buscar administrador: ${error.message}`);
    }
  }

  async findOne(CPF: string) {
    try {
      const admin = await this.prisma.admin.findUnique({ where: { CPF } });
      if (!admin) {
        throw new NotFoundException(`Administrador com ID ${CPF} não encontrado`);
      }
      return admin;
    } catch (error) {
      this.logger.error(`Falha ao buscar administrador com ID ${CPF}: ${error.message}`);
      throw error;
    }
  }

  async update(CPF: string, updateAdminDto: UpdateAdminDto) {
    try {
      await this.findOne(CPF);
      let hashedPassword: string | undefined;
      if (updateAdminDto.password) {
        hashedPassword = await UsersHelper.hashPassword(updateAdminDto.password);
      }
      const payload = { ...(({ password, ...all }) => all)(updateAdminDto), ...(hashedPassword && {hashedPassword}) };
      await this.prisma.admin.update({ where: { CPF: CPF }, data: payload });
      return;
    } catch (error) {
      this.logger.error(`Falha ao editar administrador com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }

  async remove(CPF: string) {
    try {
      await this.findOne(CPF);
      await this.prisma.admin.delete({ where: { CPF } });
      return;
    } catch (error) {
      this.logger.error(`Falha ao excluir Usuáario com CPF ${CPF}: ${error.message}`);
      throw error;
    }
  }
}
