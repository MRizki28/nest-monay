import { Model } from "sequelize-typescript";
export declare class UserModel extends Model<UserModel> {
    id: string;
    name: string;
    email: string;
    password: string;
    access_token: string;
    created_at: Date;
    updated_at: Date;
}
