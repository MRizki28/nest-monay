import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { stat } from 'fs';
import { MonayModel } from 'src/models/monay.model';

@Injectable()
export class MonayService {
    constructor(
        @InjectModel(MonayModel)
        private readonly monayModel: typeof MonayModel,
    ) {}

    async getAllData(): Promise<any> {
        try {
            const data = await this.monayModel.findAll();
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
