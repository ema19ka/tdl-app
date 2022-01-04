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
    // can force error with fiindOneOrFail
    const user = await this.userRepository.findOne({
      username: loginDto.username,
    });
    // check if user exist
    if (!user) {
      throw new BadRequestException('User not found or password incorrect');
    }
    // check if password is correct
    // if (!(await user.validatePassword(loginDto.password))) {
    //   throw new BadRequestException('User not found or password incorrect');
    // }
    // jwt implementieren
    //token erzeugen
    const jwt = await this.JWTService.signAsync({ user });
    // cookie anhängen (an response)
    response.cookie('jwt', jwt, {
      // name, payload, options des cookie
      httpOnly: true, // damits am frontend nicht ausgelesen werden kanns
      sameSite: 'none',
      secure: true,
    });
    return user;
  }
}
