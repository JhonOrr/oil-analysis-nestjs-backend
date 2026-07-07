import { Test, TestingModule } from '@nestjs/testing';
import { LubricantsService } from './services/lubricants.service';

describe('LubricantsService', () => {
  let service: LubricantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LubricantsService],
    }).compile();

    service = module.get<LubricantsService>(LubricantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
