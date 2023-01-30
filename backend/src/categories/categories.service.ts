import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/User.entity';
import { Repository } from 'typeorm';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import { Category } from './entity/Category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createCategory(createDto: AddCategoryDto): Promise<Category> {
    const user = await this.userRepository.findOne(createDto.user);
    const category = this.categoryRepository.create({
      id: createDto.id,
      name: createDto.name,
      user: user,
      color: createDto.color,
    });
    return this.categoryRepository.save(category);
  }

  public async getListFromCategory(categoryId: string): Promise<Category> {
    try {
      return await this.categoryRepository.findOne(categoryId);
    } catch (error) {
      throw new HttpException(
        'Error getting category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // TODO: test out update
  public async updateCategory(
    id: number,
    categoryDto: AddCategoryDto,
  ): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
    const user = await this.userRepository.findOne(categoryDto.user);
    category.name = categoryDto.name;
    category.user = user;
    category.color = categoryDto.color;
    return await this.categoryRepository.save(category);
  }

  public async deleteCategory(category: Category): Promise<Category> {
    try {
      await this.categoryRepository.delete(category);
      return category;
    } catch (error) {
      throw new HttpException(
        'Error deleting category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
