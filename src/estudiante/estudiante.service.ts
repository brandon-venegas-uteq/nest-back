import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudianteService extends GenericService<Estudiante> {
  constructor(
    @InjectRepository(Estudiante)
    protected repository: Repository<Estudiante>,
  ) {
    super(repository);
  }
}
