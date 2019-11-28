import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { BuildLevelsModule } from './build-levels/build-levels.module';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    BuildLevelsModule,
    PicturesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
