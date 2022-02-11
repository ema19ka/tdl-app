import {
  Body,
  Controller,
  Post,
  Get,
  ValidationPipe,
  UseGuards,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './entity/User.entity';
import { RegisterUserDto } from './dtos/RegisterUser.dto';
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

  // TODO: rename get user
  @UseGuards(AuthGuard)
  @Get('/categories/:id')
  getCategories(@Param() params: RegisterUserDto): Promise<User> {
    return this.usersService.getCategoriesOfUser(params.id);
  }

  // @ApiOperation({ summary: 'Get Book by given ID' })
  // @Get('/:id')
  // public async getBookByID(@Param() params: BooksQueryDto): Promise<Book> {
  //   return this.booksService.getBookByID(params.id);
  // }
}
