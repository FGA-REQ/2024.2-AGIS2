import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthcareplanService } from './healthcareplan.service';
import { CreateHealthcareplanDto } from './dto/create-healthcareplan.dto';
import { UpdateHealthcareplanDto } from './dto/update-healthcareplan.dto';

@Controller('healthcareplan')
export class HealthcareplanController {
  constructor(private readonly healthcareplanService: HealthcareplanService) {}

  @Post()
  create(@Body() createHealthcareplanDto: CreateHealthcareplanDto) {
    return this.healthcareplanService.create(createHealthcareplanDto);
  }

  @Get()
  findAll() {
    return this.healthcareplanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthcareplanService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthcareplanDto: UpdateHealthcareplanDto) {
    return this.healthcareplanService.update(id, updateHealthcareplanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthcareplanService.remove(id);
  }
}
