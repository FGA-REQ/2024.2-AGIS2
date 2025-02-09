import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post()
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get()
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':CPF')
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  findOne(@Param('CPF') CPF: string) {
    return this.adminService.findOne(CPF);
  }

  @Patch(':CPF')
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  update(@Param('CPF') CPF: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(CPF, updateAdminDto);
  }

  @Delete(':CPF')
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  remove(@Param('CPF') CPF: string) {
    return this.adminService.remove(CPF);
  }
}
