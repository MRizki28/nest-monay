import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UserController } from 'src/controllers/user/user.controller';
import { UserModel } from 'src/models/user.model';
import { UserService } from 'src/service/user/user.service';
require('dotenv').config();

@Module({
    imports: [
        SequelizeModule.forFeature([UserModel]),
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: '60s' }
        }),
    ],
    providers: [UserService, JwtStrategy],
    controllers: [UserController]
})
export class UserModule {}
