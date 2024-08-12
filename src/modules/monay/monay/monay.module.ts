import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MonayController } from 'src/controllers/monay/monay/monay.controller';
import { MonayModel } from 'src/models/monay.model';
import { MonayService } from 'src/service/monay/monay/monay.service';

@Module({
    imports: [SequelizeModule.forFeature([MonayModel])],
    providers: [MonayService],
    controllers: [MonayController],
})
export class MonayModule {}
