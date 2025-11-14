import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';

@Injectable()
export class ProfesorService extends GenericService<Profesor> {
  constructor(
    @InjectRepository(Profesor)
    protected repository: Repository<Profesor>,
  ) {
    super(repository);
  }
}