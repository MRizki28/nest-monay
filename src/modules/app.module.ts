import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from './app.service';
import { MonayModule } from './account/monay/monay.module';
import { SequelizeModule } from '@nestjs/sequelize';

require('dotenv').config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      uri: process.env.DATABASE_URL,
    }),
    MonayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
