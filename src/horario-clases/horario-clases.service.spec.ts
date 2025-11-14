import { Test, TestingModule } from '@nestjs/testing';
import { HorarioClasesService } from './horario-clases.service';

describe('HorarioClasesService', () => {
  let service: HorarioClasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorarioClasesService],
    }).compile();

    service = module.get<HorarioClasesService>(HorarioClasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
