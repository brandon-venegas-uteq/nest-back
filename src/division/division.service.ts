import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DivisionEntity } from './entities/division.entity';
import { Repository } from 'typeorm';
import { GenericService } from '../utils/generic.service';

@Injectable()
export class DivisionService extends GenericService<DivisionEntity> {
  constructor(
    @InjectRepository(DivisionEntity)
    protected repository: Repository<DivisionEntity>,
  ) {
    super(repository);
  }

  async findOneRelation(id: number): Promise<DivisionEntity | null> {
    return this.repository.findOne({
      where: { id: id },
      relations: ['grupos'],
    });
  }
}
