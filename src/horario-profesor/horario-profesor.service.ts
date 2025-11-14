import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HorarioProfesor } from './entities/horario-profesor.entity';

@Injectable()
export class HorarioProfesorService extends GenericService<HorarioProfesor> {
  constructor(
    @InjectRepository(HorarioProfesor)
    protected repository: Repository<HorarioProfesor>,
  ) {
    super(repository);
  }
}
