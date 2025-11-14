import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Turno } from './entities/turno.entity';

@Injectable()
export class TurnoService extends GenericService<Turno> {
  constructor(
    @InjectRepository(Turno)
    protected repository: Repository<Turno>,
  ) {
    super(repository);
  }
}