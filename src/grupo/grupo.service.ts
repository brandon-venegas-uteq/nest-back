import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grupo } from './entities/grupo.entity';

@Injectable()
export class GrupoService extends GenericService<Grupo> {
  constructor(
    @InjectRepository(Grupo)
    protected repository: Repository<Grupo>,
  ) {
    super(repository);
  }
}
