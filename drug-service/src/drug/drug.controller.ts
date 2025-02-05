import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrugServiceService } from './drug.service';
import { CreateDrugServiceDto } from './dto/create-drug.dto';
import { UpdateDrugServiceDto } from './dto/update-drug.dto';

@Controller('drug-service')
export class DrugServiceController {
  constructor(private readonly drugServiceService: DrugServiceService) { }

  @Post()
  create(@Body() createDrugServiceDto: CreateDrugServiceDto) {
    return this.drugServiceService.create(createDrugServiceDto);
  }

  @Get()
  findAll() {
    return this.drugServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drugServiceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrugServiceDto: UpdateDrugServiceDto) {
    return this.drugServiceService.update(id, updateDrugServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drugServiceService.remove(id);
  }
}
