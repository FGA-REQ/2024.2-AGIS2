import { Test, TestingModule } from '@nestjs/testing';
import { PacientsController } from './pacients.controller';
import { PacientsService } from './pacients.service';

describe('PacientsController', () => {
  let controller: PacientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacientsController],
      providers: [PacientsService],
    }).compile();

    controller = module.get<PacientsController>(PacientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
