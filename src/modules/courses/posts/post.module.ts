import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { PostCourses } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostCourses])], // повторно включаем нашу сущность
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}