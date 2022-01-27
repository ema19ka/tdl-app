import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ListQuerydto {
  @ApiProperty({ type: 'string', description: 'category id' })
  @IsNotEmpty()
  @IsString()
  categoryid: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  items: string[];
}
