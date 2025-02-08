import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrugscheduleService } from './drugschedule.service';
import { CreateDrugscheduleDto } from './dto/create-drugschedule.dto';
import { UpdateDrugscheduleDto } from './dto/update-drugschedule.dto';

@Controller('drugschedule')
export class DrugscheduleController {
  constructor(private readonly drugscheduleService: DrugscheduleService) {}

  @Post()
  create(@Body() createDrugscheduleDto: CreateDrugscheduleDto) {
    return this.drugscheduleService.create(createDrugscheduleDto);
  }

  @Get()
  findAll() {
    return this.drugscheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drugscheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrugscheduleDto: UpdateDrugscheduleDto) {
    return this.drugscheduleService.update(+id, updateDrugscheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drugscheduleService.remove(+id);
  }
}
