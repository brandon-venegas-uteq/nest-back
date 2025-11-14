import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorAsignaturaController } from './profesor-asignatura.controller';
import { ProfesorAsignaturaService } from './profesor-asignatura.service';

describe('ProfesorAsignaturaController', () => {
  let controller: ProfesorAsignaturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesorAsignaturaController],
      providers: [ProfesorAsignaturaService],
    }).compile();

    controller = module.get<ProfesorAsignaturaController>(ProfesorAsignaturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
