import { Model } from "sequelize-typescript";
import { UserModel } from "./user.model";
export declare class AccountModel extends Model<AccountModel> {
    id: string;
    id_user: string;
    user: UserModel;
    account_name: string;
    balance: number;
    account_type: string;
    created_at: Date;
    updated_at: Date;
}
