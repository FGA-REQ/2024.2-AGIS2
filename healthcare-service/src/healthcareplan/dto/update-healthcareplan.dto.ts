import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthcareplanDto } from './create-healthcareplan.dto';

export class UpdateHealthcareplanDto extends PartialType(CreateHealthcareplanDto) {}
