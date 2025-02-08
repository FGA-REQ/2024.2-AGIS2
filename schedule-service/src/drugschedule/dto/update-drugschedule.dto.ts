import { PartialType } from '@nestjs/mapped-types';
import { CreateDrugscheduleDto } from './create-drugschedule.dto';

export class UpdateDrugscheduleDto extends PartialType(CreateDrugscheduleDto) {}
