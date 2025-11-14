import { Test, TestingModule } from '@nestjs/testing';
import { HorarioProfesorController } from './horario-profesor.controller';
import { HorarioProfesorService } from './horario-profesor.service';

describe('HorarioProfesorController', () => {
  let controller: HorarioProfesorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorarioProfesorController],
      providers: [HorarioProfesorService],
    }).compile();

    controller = module.get<HorarioProfesorController>(HorarioProfesorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
