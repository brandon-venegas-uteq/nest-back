import { Module } from '@nestjs/common';
import { ProfesorAsignaturaService } from './profesor-asignatura.service';
import { ProfesorAsignaturaController } from './profesor-asignatura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorAsignatura } from './entities/profesor-asignatura.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorAsignatura])],
  controllers: [ProfesorAsignaturaController],
  providers: [ProfesorAsignaturaService],
})
export class ProfesorAsignaturaModule {}
