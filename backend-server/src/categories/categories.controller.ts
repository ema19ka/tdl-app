import {
  Body,
  Controller,
  Param,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';
import { Request } from 'express';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import { User } from 'src/users/entity/User.entity';
import RequestWithUser from 'src/auth/requestWithUser.interface';
import { RegisterUserDto } from 'src/users/dtos/RegisterUser.dto';

@ApiTags('Categories Controller')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // TODO: fix create
  @ApiOperation({ summary: 'Add a Category' })
  @UseGuards(AuthGuard)
  @Post('/add')
  async addCategory(
    @Body(ValidationPipe) category: Category,
  ): Promise<Category> {
    return this.categoriesService.addCategory(category);
  }
  // TODO: update
  // TODO: delete

  //test
  @UseGuards(AuthGuard)
  @Post('/create')
  async createCategory(
    @Body() category: AddCategoryDto,
    @Req() req: RequestWithUser,
  ): Promise<Category> {
    console.log('req');
    console.log(req.user);
    return this.categoriesService.createCategory(category, req.user);
  }

  // @UseGuards(AuthGuard)
  // @Post('/test')
  // async testCreate(
  //   @Body(ValidationPipe)
  //   category: Category,
  //   params: string,
  // ): Promise<Category> {
  //   // console.log(user, category);
  //   // return 'test';
  //   console.log('controller');
  //   console.log(category);
  //   console.log(params);
  //   return this.categoriesService.testCreate(category, params);
  // }

  @UseGuards(AuthGuard)
  @Post('/test')
  async testCreate(
    @Body(ValidationPipe) createDto: AddCategoryDto,
  ): Promise<any> {
    return this.categoriesService.testCreate(createDto);
  }
}
