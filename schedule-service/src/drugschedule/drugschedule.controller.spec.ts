import { Test, TestingModule } from '@nestjs/testing';
import { DrugscheduleController } from './drugschedule.controller';
import { DrugscheduleService } from './drugschedule.service';

describe('DrugscheduleController', () => {
  let controller: DrugscheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrugscheduleController],
      providers: [DrugscheduleService],
    }).compile();

    controller = module.get<DrugscheduleController>(DrugscheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
