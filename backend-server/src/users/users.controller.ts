import {
  Body,
  Controller,
  Post,
  Get,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './entity/User.entity';
import { UsersService } from './users.service';
@ApiTags('Users Controller')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Register a User' })
  @Post('/register') // mit :/ parameter
  async registerUser(@Body(ValidationPipe) user: User): Promise<User> {
    return this.usersService.registerUser(user);
  }

  // test endpoint for guard
  @UseGuards(AuthGuard)
  @Get('/all')
  protected getAllUsers() {
    return 'true';
  }
}
