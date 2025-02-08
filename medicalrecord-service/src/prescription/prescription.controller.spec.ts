import { Test, TestingModule } from '@nestjs/testing';
import { PrescriptionController } from './prescription.controller';
import { PrescriptionService } from './prescription.service';

describe('PrescriptionController', () => {
  let controller: PrescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescriptionController],
      providers: [PrescriptionService],
    }).compile();

    controller = module.get<PrescriptionController>(PrescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
