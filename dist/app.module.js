"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/common/users/users.module");
const post_module_1 = require("./modules/courses/posts/post.module");
const auth_module_1 = require("./modules/common/auth/auth.module");
const app_exception_filter_1 = require("./app.exception.filter");
const core_1 = require("@nestjs/core");
const jwt_guard_1 = require("./utils/jwt-guard");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                driver: require('mysql2'),
                host: process.env.MYSQL_HOST,
                port: parseInt(process.env.MYSQL_PORT),
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                entities: ['dist/**/*.entity.{ts,js}'],
                synchronize: true,
                logging: true,
            }),
            users_module_1.UsersModule,
            post_module_1.PostsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            jwt_guard_1.JwtGuard,
            { provide: core_1.APP_FILTER, useClass: app_exception_filter_1.HttpExceptionFilter }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map