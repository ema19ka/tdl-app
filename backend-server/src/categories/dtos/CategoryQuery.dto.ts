import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { List } from 'src/lists/entity/List.entity';

export class CategoryQueryDto {
  @ApiProperty({ type: 'string', description: 'user id' })
  @IsNotEmpty()
  @IsString()
  userid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  lists: string[];
}
