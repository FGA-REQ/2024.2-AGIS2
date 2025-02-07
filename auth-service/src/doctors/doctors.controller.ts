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
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(+id);
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
