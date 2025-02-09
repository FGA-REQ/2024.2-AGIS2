import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) { }

  @Post()
  @SetMetadata("roles", ["admin", "doctor"])
  @UseGuards(RolesGuard)
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':CPF')
  findOne(@Param('CPF') CPF: string) {
    return this.patientsService.findOne(CPF);
  }

  @Patch(':CPF')
  @SetMetadata("roles", ["admin", "doctor"])
  @UseGuards(RolesGuard)
  update(@Param('CPF') CPF: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientsService.update(CPF, updatePatientDto);
  }

  @Delete(':CPF')
  @SetMetadata("roles", ["admin"])
  @UseGuards(RolesGuard)
  remove(@Param('CPF') CPF: string) {
    return this.patientsService.remove(CPF);
  }
}
