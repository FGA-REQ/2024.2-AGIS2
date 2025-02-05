import { Test, TestingModule } from '@nestjs/testing';
import { DrugServiceService } from './drug.service';

describe('DrugServiceService', () => {
  let service: DrugServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrugServiceService],
    }).compile();

    service = module.get<DrugServiceService>(DrugServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
