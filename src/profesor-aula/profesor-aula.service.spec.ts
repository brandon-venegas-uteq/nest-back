import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorAulaService } from './profesor-aula.service';

describe('ProfesorAulaService', () => {
  let service: ProfesorAulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfesorAulaService],
    }).compile();

    service = module.get<ProfesorAulaService>(ProfesorAulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
