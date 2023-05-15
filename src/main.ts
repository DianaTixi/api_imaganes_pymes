import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/pymes/');
  app.use(helmet());
  app.use(json({ limit: '50mb' }));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: false,
      whitelist: true,
    }),
  );

  app.enableCors();

  const configSwagger = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Alma App')
    .setDescription('Descripcion de cada endpoints del ALMA APP')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  await app.listen(AppModule.port, '0.0.0.0');
}
bootstrap();
