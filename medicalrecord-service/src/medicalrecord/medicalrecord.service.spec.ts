import { Test, TestingModule } from '@nestjs/testing';
import { MedicalrecordService } from './medicalrecord.service';

describe('MedicalrecordService', () => {
  let service: MedicalrecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalrecordService],
    }).compile();

    service = module.get<MedicalrecordService>(MedicalrecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
