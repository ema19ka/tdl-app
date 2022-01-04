import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { User } from './entity/User.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register') // mit :/ parameter
  public registerUser(@Body(ValidationPipe) user: User): Promise<User> {
    return this.usersService.registerUser(user);
  }
}
