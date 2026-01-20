import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOne(id: any): Promise<import("./user.entity").UserCommon | null>;
    findAll(): Promise<import("./user.entity").UserCommon[]>;
    create(userData: any): Promise<import("./user.entity").UserCommon>;
    remove(id: string): Promise<void>;
}
