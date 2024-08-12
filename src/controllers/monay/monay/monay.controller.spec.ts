import { Test, TestingModule } from '@nestjs/testing';
import { MonayController } from './monay.controller';

describe('MonayController', () => {
  let controller: MonayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonayController],
    }).compile();

    controller = module.get<MonayController>(MonayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
