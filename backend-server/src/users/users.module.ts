import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/categories/entity/Category.entity';
import { User } from './entity/User.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    JwtModule.register({
      secret: '12341234', // key mit dem jwt signiert wird, so safe wie möglich
      signOptions: {
        expiresIn: '24h',
      },
    }),
    TypeOrmModule.forFeature([User, Category]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
