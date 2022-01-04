import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'; // alte library braucht diesen import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await app.listen(3000).then((d) => console.log('backend running'));
}
bootstrap();
