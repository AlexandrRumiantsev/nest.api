import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { PostsService } from './post.service';
import { JwtGuard } from '../../../utils/jwt-guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:id')
  async findOne(@Param('id') id) {
    return await this.postsService.findById(parseInt(id));
  }

  @Get()
  @UseGuards(JwtGuard)
  @ApiBearerAuth('access-token')
  async findAll() {
    return await this.postsService.findAll();
  }

  @Post()
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Создание поста' })
  @ApiBody({ type: CreatePostDto, description: 'Тело запроса для создания поста' })
  @ApiResponse({ status: 201, description: 'Пост успешно создан' })
  @ApiResponse({ status: 400, description: 'Ошибка при создании поста' })
  async create(@Body() userData: any) {
    return await this.postsService.create(userData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.postsService.delete(+id);
  }
}