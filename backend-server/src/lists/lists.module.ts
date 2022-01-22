import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entity/List.entity';
import { ListsController } from './lists.controller';
import { ListsService } from './lists.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([List]),
    JwtModule.register({
      secret: '12341234',
      signOptions: {
        expiresIn: '1m',
      },
    }),
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
