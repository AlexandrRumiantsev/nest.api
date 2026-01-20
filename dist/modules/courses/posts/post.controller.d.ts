import { PostsService } from './post.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findOne(id: any): Promise<import("./post.entity").PostCourses | null>;
    findAll(): Promise<import("./post.entity").PostCourses[]>;
    create(userData: any): Promise<import("./post.entity").PostCourses>;
    remove(id: string): Promise<void>;
}
