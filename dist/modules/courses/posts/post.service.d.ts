import { Repository } from 'typeorm';
import { PostCourses } from './post.entity';
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<PostCourses>);
    findAll(): Promise<PostCourses[]>;
    findById(id: number): Promise<PostCourses | null>;
    create(userData: Partial<PostCourses>): Promise<PostCourses>;
    delete(id: number): Promise<void>;
}
