import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService, // zugriff auf jwt
    private userService: UsersService, //
  ) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log(request.cookies);
    try {
      const jwt = request.cookies['jwt'];
      console.log(jwt);
      return this.jwtService.verify(jwt); // verify liefert nur true oder false
    } catch (error) {
      return false; // !!! in angular über axios mitgeben withCredentials: true -> schickt http cookie mit
    }
  }
}
