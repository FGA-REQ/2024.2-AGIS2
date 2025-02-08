import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalrecordDto } from './create-medicalrecord.dto';

export class UpdateMedicalrecordDto extends PartialType(CreateMedicalrecordDto) {}
