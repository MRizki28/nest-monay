import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/models/user.model';
import { UserDto } from 'src/dto/user/user.dto';
export declare class UserService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: typeof UserModel, jwtService: JwtService);
    register(userDto: UserDto): Promise<any>;
}
