import { Module } from '@nestjs/common';
import { PicturesController } from './pictures.controller';

@Module({
  controllers: [PicturesController]
})
export class PicturesModule {}
