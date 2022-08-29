import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entity/User.entity';

export class AddCategoryDto {
  @ApiProperty() @IsNotEmpty() id: string;

  @ApiProperty() @IsNotEmpty() name: string;

  @ApiProperty() @IsNotEmpty() user: User;

  @ApiProperty() color: string;
}
