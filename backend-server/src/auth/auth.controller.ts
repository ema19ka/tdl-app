import { Body, Controller, Post, Res, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseInterceptors()
  @Post('/login')
  protected async login(
    @Body(ValidationPipe) loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response, //gibt mir den response an jede methode weiter, express response
  ): Promise<any> {
    // return 'login';
    return this.authService.login(loginDto, response);
  }
}
