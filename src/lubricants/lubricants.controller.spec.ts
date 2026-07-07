import { Test, TestingModule } from '@nestjs/testing';
import { LubricantsController } from './controllers/lubricants.controller';
import { LubricantsService } from './services/lubricants.service';

describe('LubricantsController', () => {
  let controller: LubricantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LubricantsController],
      providers: [LubricantsService],
    }).compile();

    controller = module.get<LubricantsController>(LubricantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
