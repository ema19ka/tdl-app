import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';

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

  // @UseGuards(AuthGuard)
  // @Post('/create')
  // async createCategory(
  //   @Body() category: AddCategoryDto, @Req() req: RequestWithUser)
  // ): Promise<Category> {
  //   return this.categoriesService.createCategory(category, req.user);
  // }
}
