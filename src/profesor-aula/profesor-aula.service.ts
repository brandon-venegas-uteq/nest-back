import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorAula } from './entities/profesor-aula.entity';

@Injectable()
export class ProfesorAulaService extends GenericService<ProfesorAula> {
  constructor(
    @InjectRepository(ProfesorAula)
    protected repository: Repository<ProfesorAula>,
  ) {
    super(repository);
  }
}