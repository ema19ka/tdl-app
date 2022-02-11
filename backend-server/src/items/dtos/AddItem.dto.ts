import { IsNotEmpty } from 'class-validator';
import { List } from 'src/lists/entity/List.entity';

export class AddItemDto {
  id: string;

  @IsNotEmpty() name: string;

  @IsNotEmpty() list: List;
}
