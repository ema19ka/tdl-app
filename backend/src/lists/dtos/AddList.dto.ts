import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/entity/Category.entity';

export class AddListDto {
  @ApiProperty() id: string;

  @ApiProperty() name: string;

  @ApiProperty() category: Category;

  @ApiProperty() isDone: boolean;
}
