import { Test, TestingModule } from '@nestjs/testing';
import { HorarioClasesController } from './horario-clases.controller';
import { HorarioClasesService } from './horario-clases.service';

describe('HorarioClasesController', () => {
  let controller: HorarioClasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorarioClasesController],
      providers: [HorarioClasesService],
    }).compile();

    controller = module.get<HorarioClasesController>(HorarioClasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
