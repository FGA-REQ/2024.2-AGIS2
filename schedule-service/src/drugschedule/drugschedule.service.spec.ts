import { Test, TestingModule } from '@nestjs/testing';
import { DrugscheduleService } from './drugschedule.service';

describe('DrugscheduleService', () => {
  let service: DrugscheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrugscheduleService],
    }).compile();

    service = module.get<DrugscheduleService>(DrugscheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
