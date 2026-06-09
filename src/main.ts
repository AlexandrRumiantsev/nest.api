// src/main.ts

import { NestFactory } from '@nestjs/core';
import * as path from 'path'; // Для работы с путями к файлам
import * as fs from 'fs';     // Для записи файла на диск
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    console.log('Генерация спецификации OpenAPI...');
    try {
        const config = new DocumentBuilder()
          .setTitle('NEAT API')
          .setDescription('API документация проекта NEAT')
          .setVersion('1.0')
          .build();

        const documentForFile = SwaggerModule.createDocument(app, config);
        const outputFilePath = path.join(__dirname, '..', 'api-openapi.json');
        fs.writeFileSync(outputFilePath, JSON.stringify(documentForFile, null, 2));
        console.log(`✅ УСПЕХ: Файл спецификации создан в корне проекта.`);

    } catch (error) {
        console.error("❌ Ошибка при генерации файла:", error.message);
    }

    const express = require('express');
    
    app.use(express.static(path.join(__dirname, '..')));
    console.log('📂 Статические файлы из корня подключены.');

    const uiConfig = new DocumentBuilder().build();
    SwaggerModule.setup('api', app, () =>
      SwaggerModule.createDocument(app, uiConfig),
    );

    await app.listen(3000);
    console.log('🚀 Сервер запущен на порту 3000');
}

bootstrap();