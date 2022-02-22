import { ApiProperty } from '@nestjs/swagger';
import { List } from 'src/lists/entity/List.entity';

export class AddItemDto {
  @ApiProperty() id: string;

  @ApiProperty() name: string;

  @ApiProperty() list: List;

  @ApiProperty() isDone: boolean;
}
