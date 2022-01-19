import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/Category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async addCategory(category: Category): Promise<Category> {
    console.log(category);
    // const user = await
    return await this.categoryRepository.save(category);
  }
}
