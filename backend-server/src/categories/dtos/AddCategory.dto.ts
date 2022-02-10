import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/entity/User.entity';

export class AddCategoryDto {
  @IsNotEmpty() name: string;

  @IsNotEmpty() user: User;
}
