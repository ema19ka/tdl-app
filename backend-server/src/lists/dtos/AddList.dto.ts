import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/categories/entity/Category.entity';

export class AddListDto {
  id: string;

  name: string;

  category: Category;

  isDone: boolean;
}
