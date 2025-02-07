import { Test, TestingModule } from '@nestjs/testing';
import { HealthcareplanController } from './healthcareplan.controller';
import { HealthcareplanService } from './healthcareplan.service';

describe('HealthcareplanController', () => {
  let controller: HealthcareplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthcareplanController],
      providers: [HealthcareplanService],
    }).compile();

    controller = module.get<HealthcareplanController>(HealthcareplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
