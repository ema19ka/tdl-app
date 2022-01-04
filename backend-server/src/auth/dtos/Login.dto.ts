import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty() username: string;

  @IsNotEmpty() @IsEmail() mail: string;

  @IsNotEmpty() password: string;
}
