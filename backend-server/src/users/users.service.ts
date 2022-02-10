import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dtos/RegisterUser.dto';
import { User } from './entity/User.entity';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
// import { Category } from 'src/categories/entity/Category.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // private categoryRepository: Repository<Category>,
  ) {}

  public async registerUser(user: User): Promise<User> {
    console.log(user);
    // TODO: check if user already exists
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    return await this.userRepository.save(user);
  }

  public async getCategoriesOfUser(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId);
  }
}
