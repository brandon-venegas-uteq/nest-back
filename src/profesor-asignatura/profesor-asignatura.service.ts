import { Injectable } from '@nestjs/common';
import { CreateProfesorAsignaturaDto } from './dto/create-profesor-asignatura.dto';
import { UpdateProfesorAsignaturaDto } from './dto/update-profesor-asignatura.dto';
import { GenericService } from '../utils/generic.service';
import { Profesor } from '../profesor/entities/profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorAsignatura } from './entities/profesor-asignatura.entity';

@Injectable()
export class ProfesorAsignaturaService extends GenericService<ProfesorAsignatura> {
  constructor(
    @InjectRepository(ProfesorAsignatura)
    protected repository: Repository<ProfesorAsignatura>,
  ) {
    super(repository);
  }
}