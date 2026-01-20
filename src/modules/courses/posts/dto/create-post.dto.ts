import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({ example: 'Sample Title', description: 'Заголовок поста' })
  title: string;

  @ApiProperty({ example: 'This is sample content.', description: 'Содержание поста' })
  content: string;

  @ApiProperty({ example: 'category1', description: 'Категория поста' })
  category?: string;

  @ApiProperty({ example: 'Иван', description: 'Автор поста' })
  author?: string;

  @ApiProperty({ example: 'htmlcss', description: 'Раздел поста' })
  chapter?: string;
}