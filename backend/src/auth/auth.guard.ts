import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService, // zugriff auf jwt
  ) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    try {
      const jwt = request.cookies['jwt'];
      return this.jwtService.verify(jwt); // verify liefert nur true oder false
    } catch (error) {
      return false; // !!! in angular über axios mitgeben withCredentials: true -> schickt http cookie mit
    }
  }
}
