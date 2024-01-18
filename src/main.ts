import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe()) this is for global pipe

  const config = new DocumentBuilder()
  .setTitle('Api documentation')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('course')
  .addTag('videos')
  .addTag('awards')
  .addTag('auth')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();
