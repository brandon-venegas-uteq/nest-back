import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesorAulaDto } from './create-profesor-aula.dto';

export class UpdateProfesorAulaDto extends PartialType(CreateProfesorAulaDto) {}
