import { Injectable } from '@nestjs/common';
import { User } from './Entity/User.entity';

// zugriff auf repositories (get user by id, register new user)

@Injectable()
export class UsersService {
  // Endpoint
  public async getUserById(): Promise<string> {
    return 'User';
  }

  public async registerUser(): Promise<string> {
    // return User;
    return 'Register';
  }

  public async loginUser(): Promise<string> {
    // return User;
    return 'Login';
  }

  public async logoutUser(): Promise<string> {
    // return User;
    return 'Logout';
  }
}
