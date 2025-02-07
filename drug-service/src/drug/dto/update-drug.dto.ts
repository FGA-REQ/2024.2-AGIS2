import { PartialType } from '@nestjs/mapped-types';
import { CreateDrugServiceDto } from './create-drug.dto';

export class UpdateDrugServiceDto extends PartialType(CreateDrugServiceDto) { }
