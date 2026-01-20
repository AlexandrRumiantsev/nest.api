import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCourses } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostCourses)
    private readonly postsRepository: Repository<PostCourses>,
  ) {}

  async findAll(): Promise<PostCourses[]> {
    return await this.postsRepository.find();
  }

  async findById(id: number): Promise<PostCourses | null> {
    return await this.postsRepository.findOne({ where: { id } as any });
  }

  async create(userData: Partial<PostCourses>): Promise<PostCourses> {
    const newUser = this.postsRepository.create(userData);
    return await this.postsRepository.save(newUser);
  }

  async delete(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}