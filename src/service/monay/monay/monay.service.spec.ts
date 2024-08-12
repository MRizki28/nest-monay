import { Test, TestingModule } from '@nestjs/testing';
import { MonayService } from './monay.service';

describe('MonayService', () => {
  let service: MonayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonayService],
    }).compile();

    service = module.get<MonayService>(MonayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
