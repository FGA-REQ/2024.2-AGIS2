import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards } from '@nestjs/common';
import { DrugServiceService } from './drug.service';
import { CreateDrugServiceDto } from './dto/create-drug.dto';
import { UpdateDrugServiceDto } from './dto/update-drug.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('drug-service')
export class DrugServiceController {
  constructor(private readonly drugServiceService: DrugServiceService) { }

  @Post()
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
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
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updateDrugServiceDto: UpdateDrugServiceDto) {
    return this.drugServiceService.update(id, updateDrugServiceDto);
  }

  @Delete(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) {
    return this.drugServiceService.remove(id);
  }
}
