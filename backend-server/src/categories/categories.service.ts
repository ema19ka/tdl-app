import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/User.entity';
import { Repository } from 'typeorm';
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

  public async createCategory(
    category: Category,
    user: User,
  ): Promise<Category> {
    const newCat = await this.categoryRepository.create({
      ...category,
      user: user,
    });
    return await this.categoryRepository.save(newCat);
  }

  // public async showAllCategories(userid: string): Promise<Category> {
  //   // console.log(id);
  //   return await this.categoryRepository.findOne(userid);
  // }

  public async testGetAllCat(): Promise<Category[]> {
    return await this.categoryRepository.find({ relations: ['user'] });
  }

  public async showAllCategoriesByUserId(userid: string): Promise<Category[]> {
    return await this.categoryRepository
      .createQueryBuilder('category')
      // .leftJoin('category.user', 'user')
      .where('category.userid = :userid', { userid })
      // .where('category.userid = :userid', {
      //   userid: '6fcd6e60-b80c-41ca-ba4d-1dbe605ffc9e',
      // })
      .getMany();
  }

  // 6fcd6e60-b80c-41ca-ba4d-1dbe605ffc9e
  // 246181b3-29d4-4ecf-84f9-aa7246c33332
}
