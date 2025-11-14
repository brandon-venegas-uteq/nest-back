import { Module } from '@nestjs/common';
import { HorarioProfesorService } from './horario-profesor.service';
import { HorarioProfesorController } from './horario-profesor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioProfesor } from './entities/horario-profesor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HorarioProfesor])],
  controllers: [HorarioProfesorController],
  providers: [HorarioProfesorService],
})
export class HorarioProfesorModule {}
