import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ type: 'string', description: 'Register with username' })
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty() username: string;

  @IsNotEmpty() password: string;
}
