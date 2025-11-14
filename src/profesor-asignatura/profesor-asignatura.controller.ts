import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorAsignaturaService } from './profesor-asignatura.service';
import { CreateProfesorAsignaturaDto } from './dto/create-profesor-asignatura.dto';
import { UpdateProfesorAsignaturaDto } from './dto/update-profesor-asignatura.dto';

@Controller('profesor-asignatura')
export class ProfesorAsignaturaController {
  constructor(private readonly profesorAsignaturaService: ProfesorAsignaturaService) {}

  @Post()
  create(@Body() createProfesorAsignaturaDto: CreateProfesorAsignaturaDto) {
    return this.profesorAsignaturaService.create(createProfesorAsignaturaDto);
  }

  @Get()
  findAll() {
    return this.profesorAsignaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorAsignaturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesorAsignaturaDto: UpdateProfesorAsignaturaDto) {
    return this.profesorAsignaturaService.update(+id, updateProfesorAsignaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorAsignaturaService.remove(+id);
  }
}
