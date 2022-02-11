import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/categories/entity/Category.entity';

export class AddListDto {
  id: string;

  @IsNotEmpty() name: string;

  @IsNotEmpty() category: Category;
}
