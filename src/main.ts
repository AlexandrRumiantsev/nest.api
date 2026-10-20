import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('NEAT API')
        .setDescription('API документация проекта NEAT')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    // Сохраняем спецификацию в файл (для справки)
    try {
        const outputFilePath = path.join(process.cwd(), 'api-openapi.json');
        fs.writeFileSync(outputFilePath, JSON.stringify(document, null, 2));
        console.log('✅ УСПЕХ: Файл спецификации api-openapi.json создан.');
    } catch (error) {
        console.error('❌ Ошибка записи api-openapi.json:', error.message);
    }

    const adapter = app.getHttpAdapter();
    const express = require('express');

    // Раздаём ассеты Swagger UI (swagger-ui-bundle.js, css и т.д.) из пакета swagger-ui-dist.
    // require.resolve() вычисляет реальный путь к пакету и работает одинаково
    // и локально, и на Vercel (в отличие от жёстких путей через __dirname).
    const swaggerUiDistPath = path.dirname(require.resolve('swagger-ui-dist/package.json'));
    adapter.use('/api', express.static(swaggerUiDistPath));

    // Swagger UI на /api и спецификация на /api-json
    SwaggerModule.setup('api', app, document, {
        customSiteTitle: 'NEAT API',
    });

    await app.listen(3000);
    console.log('🚀 Сервер запущен на порту 3000');
}

bootstrap();