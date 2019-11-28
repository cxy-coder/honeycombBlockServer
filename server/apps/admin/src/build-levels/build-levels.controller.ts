import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { BuildLevel } from '@libs/db/models/build-level.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
	model: BuildLevel
})
@Controller('build-levels')
@ApiUseTags('搭建关卡')
export class BuildLevelsController {
	constructor(@InjectModel(BuildLevel) private readonly model: ReturnModelType<typeof BuildLevel>) {}
}
