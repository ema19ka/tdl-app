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
import { AddCategoryDto } from './dtos/AddCategory.dto';

@ApiTags('Categories Controller')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Add a Category' })
  @UseGuards(AuthGuard)
  @Post('/create')
  async createCategory(
    @Body(ValidationPipe) createDto: AddCategoryDto,
  ): Promise<any> {
    return this.categoriesService.createCategory(createDto);
  }
  // TODO: update
  // TODO: delete
}
