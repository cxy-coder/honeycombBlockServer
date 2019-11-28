import { Controller } from '@nestjs/common';
import { User } from '@libs/db/models/user.model';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiUseTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
	model: User,
})
@Controller('users')
@ApiUseTags('用户')
export class UsersController {
	constructor(@InjectModel(User) private readonly model: ReturnModelType<typeof User>) {}
}
