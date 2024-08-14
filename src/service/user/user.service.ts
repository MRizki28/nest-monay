import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'src/models/user.model';
import * as bcrpyt from 'bcrypt';
import { UserDto } from 'src/dto/user/user.dto';

@Injectable()
export class UserService {
    constructor (
        @InjectModel(UserModel)
        private readonly userModel: typeof UserModel,
        private readonly jwtService: JwtService
    ) {}

    async register(userDto: UserDto): Promise<any> {
        try {
            const {
                name,
                email,
                password
            } = userDto;

            const passwordHash =await bcrpyt.hash(password, 10);
            const user = await this.userModel.create({
                name,
                email,
                password: passwordHash
            });

            const payloadToJwt = { email: user.email, sub: user.id };
            const token = this.jwtService.sign(payloadToJwt);
            await this.userModel.update({ access_token: token }, { where: { id: user.id } });

            return {
                message : 'Register success',
                data: {
                    email: user.email,
                    token
                }
            }
        } catch (error) {
            console.log(error);
        };
        
    }
}
