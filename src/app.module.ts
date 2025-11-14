import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TurnoModule } from './turno/turno.module';
import { ProfesorAulaModule } from './profesor-aula/profesor-aula.module';
import { ProfesorAsignaturaModule } from './profesor-asignatura/profesor-asignatura.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PeriodoModule } from './periodo/periodo.module';
import { HorarioProfesorModule } from './horario-profesor/horario-profesor.module';
import { HorarioClasesModule } from './horario-clases/horario-clases.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AulaModule } from './aula/aula.module';
import { EdificioModule } from './edificio/edificio.module';
import { DivisionModule } from './division/division.module';
import { GrupoModule } from './grupo/grupo.module';

@Module({
  imports: [
    DatabaseModule,
    AsignaturaModule,
    DivisionModule,
    GrupoModule,
    EdificioModule,
    AulaModule,
    EstudianteModule,
    HorarioClasesModule,
    HorarioProfesorModule,
    PeriodoModule,
    ProfesorModule,
    ProfesorAsignaturaModule,
    ProfesorAulaModule,
    TurnoModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
