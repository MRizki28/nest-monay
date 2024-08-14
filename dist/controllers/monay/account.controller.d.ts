import { AccountService } from 'src/service/account/account.service';
export declare class AccountController {
    private readonly monayService;
    constructor(monayService: AccountService);
    getAllData(): Promise<any>;
}
