import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountController } from 'src/controllers/monay/account.controller';
import { AccountModel } from 'src/models/account.model';
import { AccountService } from 'src/service/account/account.service';

@Module({
    imports: [SequelizeModule.forFeature([AccountModel])],
    providers: [AccountService],
    controllers: [AccountController],
})
export class AccountModule {}
