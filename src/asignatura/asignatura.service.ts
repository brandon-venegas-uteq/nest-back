import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignatura } from './entities/asignatura.entity';

@Injectable()
export class AsignaturaService extends GenericService<Asignatura> {
  constructor(
    @InjectRepository(Asignatura)
    protected repository: Repository<Asignatura>,
  ) {
    super(repository);
  }
}
