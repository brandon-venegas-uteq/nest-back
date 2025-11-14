import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorAulaService } from './profesor-aula.service';
import { CreateProfesorAulaDto } from './dto/create-profesor-aula.dto';
import { UpdateProfesorAulaDto } from './dto/update-profesor-aula.dto';

@Controller('profesor-aula')
export class ProfesorAulaController {
  constructor(private readonly profesorAulaService: ProfesorAulaService) {}

  @Post()
  create(@Body() createProfesorAulaDto: CreateProfesorAulaDto) {
    return this.profesorAulaService.create(createProfesorAulaDto);
  }

  @Get()
  findAll() {
    return this.profesorAulaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorAulaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesorAulaDto: UpdateProfesorAulaDto) {
    return this.profesorAulaService.update(+id, updateProfesorAulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorAulaService.remove(+id);
  }
}
