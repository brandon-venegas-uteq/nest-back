import { Module } from '@nestjs/common';
import { HorarioClasesService } from './horario-clases.service';
import { HorarioClasesController } from './horario-clases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioClases } from './entities/horario-clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HorarioClases])],
  controllers: [HorarioClasesController],
  providers: [HorarioClasesService],
})
export class HorarioClasesModule {}
