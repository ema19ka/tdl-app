import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  ValidationPipe,
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

  // TODO: fix create
  @ApiOperation({ summary: 'Add a Category' })
  @UseGuards(AuthGuard)
  @Post('/add')
  async addCategory(
    @Body(ValidationPipe) category: Category,
  ): Promise<Category> {
    return this.categoriesService.addCategory(category);
  }
  // TODO: fix read
  // @ApiOperation({ summary: 'Get all Books' })
  @Get('/overview')
  @UseGuards(AuthGuard)
  // @HttpCode(501)
  public dummyGetAllCat(): Promise<Category[]> {
    return this.categoriesService.testGetAllCat();
  }
  // TODO: update
  // TODO: delete

  // @UseGuards(AuthGuard)
  // @Post('/create')
  // async createCategory(
  //   @Body() category: AddCategoryDto, @Req() req: RequestWithUser)
  // ): Promise<Category> {
  //   return this.categoriesService.createCategory(category, req.user);
  // }

  // @ApiOperation({ summary: 'Display the users Category' })
  // @UseGuards(AuthGuard)
  // @Get('/overview/:id')
  // async showCategories(@Param() param: CategoryQueryDto): Promise<Category[]> {
  //   // const userid = category.user.toString();
  //   // return this.categoriesService.showAllCategoriesByUserId(param.userid);
  //   console.log(param.userid);
  //   return this.categoriesService.showAllCategoriesByUserId(param.userid);
  // }
}
