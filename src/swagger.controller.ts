// src/swagger.controller.ts

import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path';
import { Response } from 'express'; // Импортируем тип ответа Express

@Controller('api') // Этот декоратор создаст маршрут /api
export class SwaggerController {
  
  @Get()
  getSwaggerUi(@Res() res: Response) {
    // Путь к файлу index.html внутри установленной библиотеки.
    // require.resolve() вычисляет реальный путь к пакету и работает на Vercel,
    // в отличие от жёсткого пути через __dirname.
    const swaggerUiDistPath = path.dirname(require.resolve('swagger-ui-dist/package.json'));
    const filePath = path.join(swaggerUiDistPath, 'index.html');
    
    // Отправляем этот файл браузеру
    return res.sendFile(filePath);
  }
}