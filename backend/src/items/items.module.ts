import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from 'src/lists/entity/List.entity';
import { Item } from './entity/Item.entity';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item, List]),
    JwtModule.register({
      secret: '12341234',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
