import { Test, TestingModule } from '@nestjs/testing';
import { HealthcareplanService } from './healthcareplan.service';

describe('HealthcareplanService', () => {
  let service: HealthcareplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthcareplanService],
    }).compile();

    service = module.get<HealthcareplanService>(HealthcareplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
