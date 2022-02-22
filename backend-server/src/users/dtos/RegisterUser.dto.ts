import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class RegisterUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty() @IsNotEmpty() username: string;

  @ApiProperty() @IsNotEmpty() @IsEmail() email: string;

  @ApiProperty() @IsNotEmpty() password: string;
}
