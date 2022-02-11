import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/User.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
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

  // async testCreate(category: Category, userId: string): Promise<Category> {
  //   // const userNew = this.usersService.getCategoriesOfUser(user);
  //   const user = await this.userRepository.findOne(userId, { where: userId });
  //   console.log('service');
  //   console.log(userId);
  //   console.log(user);
  //   const cat = this.categoryRepository.create({
  //     name: category.name,
  //     user: user,
  //   });
  //   //  this.categoryRepository.create( { category.user = user });
  //   // console.log
  //   return this.categoryRepository.save(cat);
  // }

  async testCreate(createDto: AddCategoryDto): Promise<any> {
    const user = await this.userRepository.findOne(createDto.user);
    const cat = this.categoryRepository.create({
      name: createDto.name,
      user: user,
    });
    //  this.categoryRepository.create( { category.user = user });
    // console.log
    return this.categoryRepository.save(cat);
  }
}
