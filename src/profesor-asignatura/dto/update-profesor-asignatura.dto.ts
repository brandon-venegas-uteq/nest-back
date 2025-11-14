import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorAsignaturaDto } from './create-profesor-asignatura.dto';

export class UpdateProfesorAsignaturaDto extends PartialType(CreateProfesorAsignaturaDto) {}
