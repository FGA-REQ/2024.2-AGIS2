import { Test, TestingModule } from '@nestjs/testing';
import { DrugServiceController } from './drug.controller';
import { DrugServiceService } from './drug.service';

describe('DrugServiceController', () => {
  let controller: DrugServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrugServiceController],
      providers: [DrugServiceService],
    }).compile();

    controller = module.get<DrugServiceController>(DrugServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
