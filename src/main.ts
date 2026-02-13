import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Example API')
    .setDescription('Documentation for Example API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      urls: [{ url: '/api/openapi.json', name: 'API v1' }],
      customCss: '',
      customJs: ''
    }
  });

  await app.listen(3000);
}
bootstrap();