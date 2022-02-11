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
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createCategory(createDto: AddCategoryDto): Promise<any> {
    const user = await this.userRepository.findOne(createDto.user);
    const category = this.categoryRepository.create({
      name: createDto.name,
      user: user,
    });
    return this.categoryRepository.save(category);
  }
}
