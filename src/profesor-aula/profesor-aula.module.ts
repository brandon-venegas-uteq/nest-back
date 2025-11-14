import { Module } from '@nestjs/common';
import { ProfesorAulaService } from './profesor-aula.service';
import { ProfesorAulaController } from './profesor-aula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from '../asignatura/entities/asignatura.entity';
import { ProfesorAula } from './entities/profesor-aula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfesorAula])],
  controllers: [ProfesorAulaController],
  providers: [ProfesorAulaService],
})
export class ProfesorAulaModule {}
