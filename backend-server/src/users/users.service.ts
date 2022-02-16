import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/User.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async registerUser(user: User): Promise<User> {
    console.log(await this.userRepository.findOne(user.email));

    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);

    console.log(user);
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  public async getUser(userId: string): Promise<User> {
    return await this.userRepository.findOne(userId);
  }
}
