import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response, Request } from 'express';
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

  @ApiOperation({ summary: 'User Logout' })
  @UseGuards(AuthGuard)
  @Get('logout')
  async logout(@Res() res: Response, @Req() req: Request) {
    if (req.cookies['jwt']) {
      res.clearCookie('jwt').status(200).json({
        message: 'You have logged out',
      });
    } else {
      res.status(401).json({
        error: 'Invalid jwt',
      });
    }
  }
}
