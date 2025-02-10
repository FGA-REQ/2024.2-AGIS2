import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto, @Headers('authorization') authHeader: string) {
    return this.scheduleService.create(createScheduleDto, authHeader);
  }

  @Get()
  findAll(@Headers('authorization') authHeader: string) {
    return this.scheduleService.findAll(authHeader);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.update(id, updateScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }
}
