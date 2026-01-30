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


import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      driver: require('mysql2'),
      host: '94.228.126.172',
      port: parseInt('3306'),
      username: 'alexweber',
      password: 'alexweber',
      database: 'alexweber',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    PostsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtGuard,
    { provide: APP_FILTER, useClass: HttpExceptionFilter }
  ],

})
export class AppModule {}
