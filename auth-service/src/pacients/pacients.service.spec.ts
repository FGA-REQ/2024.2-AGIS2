import { Test, TestingModule } from '@nestjs/testing';
import { PacientsService } from './pacients.service';

describe('PacientsService', () => {
  let service: PacientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacientsService],
    }).compile();

    service = module.get<PacientsService>(PacientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
