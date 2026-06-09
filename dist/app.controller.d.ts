import { DatabaseCheckService } from './utils/database-check-service';
export declare class AppController {
    private readonly dbCheckService;
    constructor(dbCheckService: DatabaseCheckService);
    checkDatabaseHealth(): Promise<string>;
}
