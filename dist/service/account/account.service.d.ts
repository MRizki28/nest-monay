import { AccountModel } from 'src/models/account.model';
export declare class AccountService {
    private readonly accountModel;
    constructor(accountModel: typeof AccountModel);
    getAllData(): Promise<any>;
}
