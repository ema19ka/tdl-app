import { Injectable } from '@nestjs/common';

// zugriff auf repositories (get user by id, register new user)

@Injectable()
export class UsersService {
  // Endpoint
  public async getUserById(): Promise<string> {
    return 'User';
  }
}
