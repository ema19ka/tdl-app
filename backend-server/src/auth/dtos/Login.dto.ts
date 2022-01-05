import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty() username: string;

  @IsNotEmpty() email: string;

  @IsNotEmpty() password: string;
}
