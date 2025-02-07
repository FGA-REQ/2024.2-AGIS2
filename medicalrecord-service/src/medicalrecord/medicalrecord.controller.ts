import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { MedicalrecordService } from './medicalrecord.service';
import { CreateMedicalrecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalrecordDto } from './dto/update-medicalrecord.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('medicalrecord')
export class MedicalrecordController {
  constructor(private readonly medicalrecordService: MedicalrecordService) { }

  @Post()
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  create(@Body() createMedicalrecordDto: CreateMedicalrecordDto) {
    return this.medicalrecordService.create(createMedicalrecordDto);
  }

  @Get()
  findAll() {
    return this.medicalrecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalrecordService.findOne(+id);
  }

  @Patch(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateMedicalrecordDto: UpdateMedicalrecordDto) {
    return this.medicalrecordService.update(id, updateMedicalrecordDto);
  }

  @Delete(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.medicalrecordService.remove(id);
  }
}
