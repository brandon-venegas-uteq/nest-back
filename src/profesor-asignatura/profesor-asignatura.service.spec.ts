import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorAsignaturaService } from './profesor-asignatura.service';

describe('ProfesorAsignaturaService', () => {
  let service: ProfesorAsignaturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfesorAsignaturaService],
    }).compile();

    service = module.get<ProfesorAsignaturaService>(ProfesorAsignaturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
