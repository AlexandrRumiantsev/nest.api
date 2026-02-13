
# Зависимости:

- @nestjs/typeorm: поддержка TypeORM для NestJS.
- typeorm: сама библиотека ORM.
- mysql: драйвер MySQL.
- reflect-metadata: библиотека метаданных для декораторов.
- class-transformer и class-validator: используются для преобразования объектов и валидации данных.
- @nestjs/passport
- passport 
- passport-jwt 
- jsonwebtoken bcrypt


## Локальный дебаг прод версии

1) npm run build
2) cd dist    
3) cp ../.env .
4) npm install 
5) node main.js 