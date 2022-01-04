import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entity/User.entity';

// zugriff auf repositories (get user by id, register new user)

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Endpoint
  public async getUserById(): Promise<string> {
    return 'User';
  }

  public async registerUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
    // return 'Register';
  }

  public async loginUser(): Promise<string> {
    return 'Login';
  }

  public async logoutUser(): Promise<string> {
    return 'Logout';
  }
}
