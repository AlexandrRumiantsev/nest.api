// src/swagger.controller.ts

import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path';
import { Response } from 'express'; // Импортируем тип ответа Express

@Controller('api') // Этот декоратор создаст маршрут /api
export class SwaggerController {
  
  @Get()
  getSwaggerUi(@Res() res: Response) {
    // Путь к файлу index.html внутри установленной библиотеки
    const filePath = path.join(__dirname, '..', 'node_modules', 'swagger-ui-dist', 'index.html');
    
    // Отправляем этот файл браузеру
    return res.sendFile(filePath);
  }
}