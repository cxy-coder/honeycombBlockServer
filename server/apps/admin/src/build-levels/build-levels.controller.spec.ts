import { Test, TestingModule } from '@nestjs/testing';
import { BuildLevelsController } from './build-levels.controller';

describe('BuildLevels Controller', () => {
  let controller: BuildLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildLevelsController],
    }).compile();

    controller = module.get<BuildLevelsController>(BuildLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
