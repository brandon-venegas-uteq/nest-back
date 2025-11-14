import { Module } from '@nestjs/common';
import { AulaService } from './aula.service';
import { AulaController } from './aula.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './entities/aula.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aula])],
  controllers: [AulaController],
  providers: [AulaService],
})
export class AulaModule {}
