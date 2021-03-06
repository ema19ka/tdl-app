import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'tdl',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/**/*.js'],
      migrationsRun: true,
      synchronize: true,
      // logging: true,
      dropSchema: true,
    }),
    AuthModule,
    CategoriesModule,
    ListsModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
