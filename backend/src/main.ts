import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'; // alte library braucht diesen import
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('YET, another tdl-App')
    .setDescription('Yes, another to-do-list app')
    .setVersion('1.0')
    .addTag('tdl')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors({
    origin: 'http://localhost:8100',
    // origin: "http://10.0.0.52:8100",
    credentials: true,
  });

  app.use(cookieParser());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await app.listen(3000).then((d) => console.log('backend running'));
}
bootstrap();
