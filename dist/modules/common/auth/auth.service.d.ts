import { UsersService } from '../users/users.service';
import { UserCommon } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    validateUserById(id: number): Promise<UserCommon | null>;
    generateToken(userId: number): string;
}
