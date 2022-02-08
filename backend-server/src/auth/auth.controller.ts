import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';

@ApiTags('Auth Controller')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(ClassSerializerInterceptor) // nur für diese methode, auch für ganzen controller möglich, because of exlude in entity
  @ApiOperation({ summary: 'User Login' })
  @Post('/login')
  protected async login(
    @Body(ValidationPipe) loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response, //gibt mir den response an jede methode weiter, express response
  ): Promise<any> {
    return this.authService.login(loginDto, response);
  }

  @UseGuards(AuthGuard)
  @Get('logout')
  async logout(@Res() res: Response) {
    // Some internal checks
    // console.log(res);
    res.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
    console.log(res);
    return res.sendStatus(200);
    // res.cookie('token', '', { expires: new Date() });
  }
}
