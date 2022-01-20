import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryQueryDto {
  @ApiProperty({ type: 'string', description: 'user id' })
  @IsNotEmpty()
  @IsString()
  userid: string;
}
