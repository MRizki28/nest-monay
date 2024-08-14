import { UserDto } from 'src/dto/user/user.dto';
import { UserService } from 'src/service/user/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(userDto: UserDto): Promise<any>;
}
