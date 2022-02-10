import { Injectable } from '@nestjs/common';
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
  ) {}

  public async addCategory(category: Category): Promise<Category> {
    return await this.categoryRepository.save(category);
  }

  // 6fcd6e60-b80c-41ca-ba4d-1dbe605ffc9e
  // 246181b3-29d4-4ecf-84f9-aa7246c33332

  async createCategory(category: AddCategoryDto, userid: User) {
    const newCategory = await this.categoryRepository.create({
      ...category,
      user: userid,
    });
    console.log('service');
    console.log(userid);
    console.log(category);
    await this.categoryRepository.save(newCategory);
    return newCategory;
  }
}
