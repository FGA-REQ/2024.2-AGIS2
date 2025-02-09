import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards, Headers } from '@nestjs/common';
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
  create(@Body() createMedicalrecordDto: CreateMedicalrecordDto, @Headers('authorization') authHeader: string) {
    return this.medicalrecordService.create(createMedicalrecordDto, authHeader);
  }

  @Get()
  findAll(@Headers('Authorization') authHeader: string) {
    return this.medicalrecordService.findAll(authHeader);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Headers('Authorization') authHeader: string) {
    return this.medicalrecordService.findOne(id, authHeader);
  }

  @Patch(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateMedicalrecordDto: UpdateMedicalrecordDto, @Headers('Authorization') authHeader: string) {
    return this.medicalrecordService.update(id, updateMedicalrecordDto, authHeader);
  }

  @Delete(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string, @Headers('Authorization') authHeader: string) {
    return this.medicalrecordService.remove(id, authHeader);
  }
}
