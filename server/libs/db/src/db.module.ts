import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/honeycombblockDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
