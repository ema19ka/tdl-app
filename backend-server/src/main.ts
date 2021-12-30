import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // instanziert alle module -> services

  const config = new DocumentBuilder()
    .setTitle('TDL')
    .setDescription('Yes, another to-do-list app')
    .setVersion('1.0')
    .addTag('tdl')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await app.listen(3000).then((d) => console.log('running'));
  // kein code nach app.listen
}
bootstrap();
