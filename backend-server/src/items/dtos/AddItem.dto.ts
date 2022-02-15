import { IsNotEmpty } from 'class-validator';
import { List } from 'src/lists/entity/List.entity';

export class AddItemDto {
  id: string;

  name: string;

  list: List;

  isDone: boolean;
}
