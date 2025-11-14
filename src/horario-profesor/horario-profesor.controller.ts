import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorarioProfesorService } from './horario-profesor.service';
import { CreateHorarioProfesorDto } from './dto/create-horario-profesor.dto';
import { UpdateHorarioProfesorDto } from './dto/update-horario-profesor.dto';

@Controller('horario-profesor')
export class HorarioProfesorController {
  constructor(private readonly horarioProfesorService: HorarioProfesorService) {}

  @Post()
  create(@Body() createHorarioProfesorDto: CreateHorarioProfesorDto) {
    return this.horarioProfesorService.create(createHorarioProfesorDto);
  }

  @Get()
  findAll() {
    return this.horarioProfesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horarioProfesorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorarioProfesorDto: UpdateHorarioProfesorDto) {
    return this.horarioProfesorService.update(+id, updateHorarioProfesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horarioProfesorService.remove(+id);
  }
}
