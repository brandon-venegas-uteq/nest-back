import { Injectable } from '@nestjs/common';
import { CreateHorarioClaseDto } from './dto/create-horario-clase.dto';
import { UpdateHorarioClaseDto } from './dto/update-horario-clase.dto';

@Injectable()
export class HorarioClasesService {
  create(createHorarioClaseDto: CreateHorarioClaseDto) {
    return 'This action adds a new horarioClase';
  }

  findAll() {
    return `This action returns all horarioClases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} horarioClase`;
  }

  update(id: number, updateHorarioClaseDto: UpdateHorarioClaseDto) {
    return `This action updates a #${id} horarioClase`;
  }

  remove(id: number) {
    return `This action removes a #${id} horarioClase`;
  }
}
