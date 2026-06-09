"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path = require("path");
const fs = require("fs");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('Генерация спецификации OpenAPI...');
    try {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('NEAT API')
            .setDescription('API документация проекта NEAT')
            .setVersion('1.0')
            .build();
        const documentForFile = swagger_1.SwaggerModule.createDocument(app, config);
        const outputFilePath = path.join(__dirname, '..', 'api-openapi.json');
        fs.writeFileSync(outputFilePath, JSON.stringify(documentForFile, null, 2));
        console.log(`✅ УСПЕХ: Файл спецификации api-openapi.json создан.`);
    }
    catch (error) {
        console.error("❌ Ошибка:", error.message);
    }
    const express = require('express');
    app.use(express.static(path.join(__dirname, '..')));
    console.log('📂 Статические файлы из корня подключены.');
    const uiConfig = new swagger_1.DocumentBuilder().build();
    swagger_1.SwaggerModule.setup('api', app, () => swagger_1.SwaggerModule.createDocument(app, uiConfig));
    await app.listen(3000);
    console.log('🚀 Сервер запущен на порту 3000');
}
bootstrap();
//# sourceMappingURL=main.js.map