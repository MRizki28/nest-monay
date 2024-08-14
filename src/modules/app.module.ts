import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';

require('dotenv').config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      uri: process.env.DATABASE_URL,
    }),
    AccountModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
