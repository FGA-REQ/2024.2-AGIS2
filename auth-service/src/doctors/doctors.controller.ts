import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) { }

  @Post()
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':CRM')
  @SetMetadata("roles", ["admin", "doctor"])
  @UseGuards(RolesGuard)
  findOne(@Param('CRM') CRM: string) {
    return this.doctorsService.findOne(CRM);
  }

  @Patch(':CRM')
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  update(@Param('CRM') CRM: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(CRM, updateDoctorDto);
  }

  @Delete(':CRM')
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  remove(@Param('CRM') CRM: string) {
    return this.doctorsService.remove(CRM);
  }
}
