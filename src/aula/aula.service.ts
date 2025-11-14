import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aula } from './entities/aula.entity';

@Injectable()
export class AulaService extends GenericService<Aula> {
  constructor(
    @InjectRepository(Aula)
    protected repository: Repository<Aula>,
  ) {
    super(repository);
  }
}
