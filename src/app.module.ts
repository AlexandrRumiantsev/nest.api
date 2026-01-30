import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/common/users/users.module';
import { PostsModule } from './modules/courses/posts/post.module';
import { AuthModule } from './modules/common/auth/auth.module';
import { HttpExceptionFilter } from './app.exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { JwtGuard } from './utils/jwt-guard';
import { SomeModule } from './some-module';


import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      driver: require('mysql2'),
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT as string),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    PostsModule,
    AuthModule,
    SomeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtGuard,
    { provide: APP_FILTER, useClass: HttpExceptionFilter }
  ],

})
export class AppModule {}
