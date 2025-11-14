import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Edificio } from './entities/edificio.entity';

@Injectable()
export class EdificioService extends GenericService<Edificio> {
  constructor(
    @InjectRepository(Edificio)
    protected repository: Repository<Edificio>,
  ) {
    super(repository);
  }
}
