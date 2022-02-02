import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dtos/RegisterUser.dto';
import { User } from './entity/User.entity';
import * as bcrypt from 'bcrypt';
// import { Category } from 'src/categories/entity/Category.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // private categoryRepository: Repository<Category>,
  ) {}

  public async registerUser(user: User): Promise<User> {
    // console.log(user.username);
    // const userInDb = await this.userRepository.findOne({
    //   where: user.username,
    // });
    // if (userInDb) {
    //   throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    // }
    // const salt = await user.genSalt();
    // await user.hashPassowrd(user.password, salt);
    // console.log(test);
    // user.password = test;
    return await this.userRepository.save(user);
    // return 'Register';
  }

  // public async getCategoriesOfUser(userId: string): Promise<Category> {
  //   this.categoryRepository. = await this.userRepository.findOne(userId);

  // }
}
