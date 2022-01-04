import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty() username: string;

  @IsNotEmpty() @IsEmail() mail: string;

  @IsNotEmpty() password: string;
}
