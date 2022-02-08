import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from 'src/users/entity/User.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/Login.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly JWTService;
    constructor(userRepository: Repository<User>, JWTService: JwtService);
    login(loginDto: LoginDto, response: Response): Promise<any>;
    getCookieForLogOut(): string;
}
