import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards, Headers, Header } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) { }

  @Post()
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  create(@Body() createPrescriptionDto: CreatePrescriptionDto, @Headers('Authorization') authHeader: string) {
    return this.prescriptionService.create(createPrescriptionDto, authHeader);
  }

  @Get()
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  findAll(@Headers('Authorization') authToken: string) {
    return this.prescriptionService.findAll(authToken);
  }

  @Get(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  findOne(@Param('id') id: string, @Headers('Authorization') authHeader: string) {
    return this.prescriptionService.findOne(id, authHeader);
  }

  @Patch(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() updatePrescriptionDto: UpdatePrescriptionDto, @Headers('Authorization') authHeader: string) {
    return this.prescriptionService.update(id, updatePrescriptionDto, authHeader);
  }

  @Delete(':id')
  @SetMetadata("roles", ["doctor"])
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string, @Headers('Authorization') authHeader: string) {
    return this.prescriptionService.remove(id, authHeader);
  }
}
