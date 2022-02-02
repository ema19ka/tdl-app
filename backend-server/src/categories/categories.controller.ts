import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';
import { CategoryQueryDto } from './dtos/CategoryQuery.dto';

@ApiTags('Categories Controller')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Add a Category' })
  // @UseGuards(AuthGuard)
  @Post('/add')
  async addCategory(
    @Body(ValidationPipe) category: Category,
  ): Promise<Category> {
    return this.categoriesService.addCategory(category);
  }

  // @UseGuards(AuthGuard)
  // @Post('/create')
  // async createCategory(
  //   @Body() category: AddCategoryDto, @Req() req: RequestWithUser)
  // ): Promise<Category> {
  //   return this.categoriesService.createCategory(category, req.user);
  // }

  @ApiOperation({ summary: 'Display the users Category' })
  // @UseGuards(AuthGuard)
  @Get('/overview/:id')
  async showCategories(@Param() param: CategoryQueryDto): Promise<Category[]> {
    // const userid = category.user.toString();
    // return this.categoriesService.showAllCategoriesByUserId(param.userid);
    console.log(param.userid);
    return this.categoriesService.showAllCategoriesByUserId(param.userid);
  }

  // @ApiOperation({ summary: 'Get all Books' })
  @Get('/overview')
  // @HttpCode(501)
  public dummyGetAllCat(): Promise<Category[]> {
    return this.categoriesService.testGetAllCat();
  }

  // @Get('findByFilter')
  // async findByFilter(@Query() query: CategoryQueryDto): Promise<Category> {
  //   console.log(query);
  //   return category;
  // }
}
