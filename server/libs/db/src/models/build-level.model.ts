import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiModelProperty } from '@nestjs/swagger';
import { Picture } from './picture.model';

@modelOptions ({
  schemaOptions: {
    timestamps: true,
  }
})
export class BuildLevel {
  @ApiModelProperty({ description: '名称', example: 'level1' })
  @prop()
  name: string;

  @ApiModelProperty({ description: '步骤数量', example: '0' })
  @prop()
  step: number;

  @arrayProp({ itemsRef: 'Picture' })
  pictures: Ref<Picture>[];
}