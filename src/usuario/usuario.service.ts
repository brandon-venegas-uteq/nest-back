import { Injectable } from '@nestjs/common';
import { GenericService } from '../utils/generic.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService extends GenericService<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    protected repository: Repository<Usuario>,
  ) {
    super(repository);
  }
}