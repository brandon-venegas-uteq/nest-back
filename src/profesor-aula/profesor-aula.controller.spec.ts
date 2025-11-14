import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorAulaController } from './profesor-aula.controller';
import { ProfesorAulaService } from './profesor-aula.service';

describe('ProfesorAulaController', () => {
  let controller: ProfesorAulaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfesorAulaController],
      providers: [ProfesorAulaService],
    }).compile();

    controller = module.get<ProfesorAulaController>(ProfesorAulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
