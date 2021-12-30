import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

// endpoints definieren, ohne logik, service wird aufgerufen + den return value returnen
@Controller('users') // endpoint unter /users,
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUserById(): Promise<string> {
    return this.usersService.getUserById();
  }
}

// uudi not empty
