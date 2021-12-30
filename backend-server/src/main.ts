import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const config = new DocumentBuilder()
  //   .setTitle('yet another to-do-list app')
  //   .setDescription('Descript')
  //   .setVersion('1.0')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  await app.listen(3000).then((d) => console.log('running'));
}
bootstrap();
