import { PartialType } from '@nestjs/mapped-types';
import { CreatePacientDto } from './create-pacient.dto';

export class UpdatePacientDto extends PartialType(CreatePacientDto) {}
