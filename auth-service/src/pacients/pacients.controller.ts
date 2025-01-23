import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PacientsService } from './pacients.service';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';

@Controller('pacients')
export class PacientsController {
  constructor(private readonly pacientsService: PacientsService) {}

  @Post()
  create(@Body() createPacientDto: CreatePacientDto) {
    return this.pacientsService.create(createPacientDto);
  }

  @Get()
  findAll() {
    return this.pacientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pacientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePacientDto: UpdatePacientDto) {
    return this.pacientsService.update(+id, updatePacientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacientsService.remove(+id);
  }
}
