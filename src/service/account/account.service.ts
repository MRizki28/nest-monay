import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { stat } from 'fs';
import { AccountModel } from 'src/models/account.model';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(AccountModel)
        private readonly accountModel: typeof AccountModel,
    ) {}

    async getAllData(): Promise<any> {
        try {
            const data = await this.accountModel.findAll();
            if(data.length == 0) {
                return [{
                    message : "Data Found",
                    status : 200,
                }];
            }else{
                return data;
            }
        } catch (error) {
            console.log(error);
        };
    }
}
