import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

// endpoints definieren, ohne logik, service wird aufgerufen + den return value returnen
@ApiTags('UsersController')
@Controller('users') // endpoint unter /users,
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get a specific user by id' })
  @Get()
  public getUserById(): Promise<string> {
    return this.usersService.getUserById();
  }
  @ApiOperation({ summary: 'Register User' })
  @Get('/register')
  public registerUser(): Promise<string> {
    return this.usersService.registerUser();
  }

  @ApiOperation({ summary: 'Login User' })
  @Get('/login')
  public loginUser(): Promise<string> {
    return this.usersService.loginUser();
  }
  @ApiOperation({ summary: 'Logout User' })
  @Get('/logout')
  public logoutUser(): Promise<string> {
    return this.usersService.logoutUser();
  }
}

// uudi not empty
