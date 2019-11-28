import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { BuildLevel } from './models/build-level.model';
import { Picture } from './models/picture.model';

const models = TypegooseModule.forFeature([
  User,
  BuildLevel,
  Picture
]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/honeycombblockDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
