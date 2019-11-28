import { Module } from '@nestjs/common';
import { BuildLevelsController } from './build-levels.controller';

@Module({
  controllers: [BuildLevelsController]
})
export class BuildLevelsModule {}
