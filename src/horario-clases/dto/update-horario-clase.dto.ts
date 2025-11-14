import { PartialType } from '@nestjs/mapped-types';
import { CreateHorarioClaseDto } from './create-horario-clase.dto';

export class UpdateHorarioClaseDto extends PartialType(CreateHorarioClaseDto) {}
