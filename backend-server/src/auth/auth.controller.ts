import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Res,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';

@ApiTags('Auth Controller')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor) // nur für diese methode, auch für ganzen controller möglich
  @ApiOperation({ summary: 'User Login' })
  @Post('/login')
  protected async login(
    @Body(ValidationPipe) loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response, //gibt mir den response an jede methode weiter, express response
  ): Promise<any> {
    // return 'login';
    return this.authService.loginOld(loginDto, response);
  }
}
