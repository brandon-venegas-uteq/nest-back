import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorarioClasesService } from './horario-clases.service';
import { CreateHorarioClaseDto } from './dto/create-horario-clase.dto';
import { UpdateHorarioClaseDto } from './dto/update-horario-clase.dto';

@Controller('horario-clases')
export class HorarioClasesController {
  constructor(private readonly horarioClasesService: HorarioClasesService) {}

  @Post()
  create(@Body() createHorarioClaseDto: CreateHorarioClaseDto) {
    return this.horarioClasesService.create(createHorarioClaseDto);
  }

  @Get()
  findAll() {
    return this.horarioClasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horarioClasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorarioClaseDto: UpdateHorarioClaseDto) {
    return this.horarioClasesService.update(+id, updateHorarioClaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horarioClasesService.remove(+id);
  }
}
