import { Test, TestingModule } from '@nestjs/testing';
import { HorarioProfesorService } from './horario-profesor.service';

describe('HorarioProfesorService', () => {
  let service: HorarioProfesorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorarioProfesorService],
    }).compile();

    service = module.get<HorarioProfesorService>(HorarioProfesorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
