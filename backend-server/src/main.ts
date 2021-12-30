import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // instanziert alle module -> services

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await app.listen(3000).then((d) => console.log('running'));
  // kein code nach app.listen
}
bootstrap();
