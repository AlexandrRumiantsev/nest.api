import { CanActivate } from '@nestjs/common';
declare const JwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGuard extends JwtGuard_base implements CanActivate {
    handleRequest(err: any, user: any, info: any): any;
}
export {};
