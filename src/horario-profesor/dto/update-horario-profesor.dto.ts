import { PartialType } from '@nestjs/mapped-types';
import { CreateHorarioProfesorDto } from './create-horario-profesor.dto';

export class UpdateHorarioProfesorDto extends PartialType(CreateHorarioProfesorDto) {}
