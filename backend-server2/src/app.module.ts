import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'db_tdl',
      // entities: ['dist/**/*.entity{.ts,.js}'],
      // entities: [__dirname + '/../**/**.entity{.ts,.js}'],
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      // migrations: ['dist/migrations/**/*.{js,.ts}'],
      // migrationsRun: true,
      synchronize: true, // mit db synchronizen
      logging: true, // sql befehle im terminal ausgeben
      dropSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
