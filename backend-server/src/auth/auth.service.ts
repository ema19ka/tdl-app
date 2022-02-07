import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { User } from 'src/users/entity/User.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/Login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly JWTService: JwtService,
  ) {}

  public async login(loginDto: LoginDto, response: Response): Promise<any> {
    const user = await this.userRepository.findOne({
      email: loginDto.email,
    });
    // console.log(user);
    if (!user) {
      throw new BadRequestException('E-Mail not found or password incorrect');
    }

    console.log(await user.validatePassword(loginDto.password));

    if (!(await user.validatePassword(loginDto.password))) {
      console.log(loginDto.password);
      throw new BadRequestException('User not found or password incorrect');
    }

    const jwt = await this.JWTService.signAsync({ user });
    response.cookie('jwt', jwt, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });

    return user;
  }
}
