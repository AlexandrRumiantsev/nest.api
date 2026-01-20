import { Repository } from 'typeorm';
import { UserCommon } from './user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UserCommon>);
    findAll(): Promise<UserCommon[]>;
    findById(id: number): Promise<UserCommon | null>;
    create(userData: Partial<UserCommon>): Promise<UserCommon>;
    findByLoginAndPassword(login: string, password: string): Promise<UserCommon | null>;
    delete(id: number): Promise<void>;
    hashPassword(password: string): Promise<string>;
    comparePassword(password: string, hashedPassword: string): Promise<Boolean>;
}
