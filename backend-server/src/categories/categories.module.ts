import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entity/User.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category, User]),
    JwtModule.register({
      secret: '12341234',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [CategoriesController, UsersController],
  providers: [CategoriesService, UsersService],
})
export class CategoriesModule {}
