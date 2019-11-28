import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Picture } from '@libs/db/models/picture.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
	model: Picture,
})
@Controller('pictures')
@ApiUseTags('图片')
export class PicturesController {
	constructor(@InjectModel(Picture) private readonly model: ReturnModelType<typeof Picture>) {}
}
