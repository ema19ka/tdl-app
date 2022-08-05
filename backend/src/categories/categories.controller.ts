import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import { Category } from './entity/Category.entity';

@ApiTags('Categories Controller')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Add a Category' })
  @UseGuards(AuthGuard)
  @Post('/create')
  async createCategory(
    @Body(ValidationPipe) createDto: AddCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.createCategory(createDto);
  }
  // TODO: update

  @ApiOperation({ summary: 'Delete a category' })
  @UseGuards(AuthGuard)
  @Delete('/delete')
  async deleteCateogry(
    @Body(ValidationPipe) category: Category,
  ): Promise<Category> {
    return this.categoriesService.deleteCategory(category);
  }

  @ApiOperation({ summary: 'Get all lists from Category' })
  @UseGuards(AuthGuard)
  @Get('/lists/:id')
  getCategories(@Param() params: AddCategoryDto): Promise<Category> {
    return this.categoriesService.getListFromCategory(params.id);
  }
}
