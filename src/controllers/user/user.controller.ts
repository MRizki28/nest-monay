import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user/user.dto';
import { UserService } from 'src/service/user/user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('/register')
    async register(@Body() userDto: UserDto): Promise<any> {
        try {
            const result = await this.userService.register(userDto);
            return result;
        } catch (error) {
            console.log(error);
        };
        
    }
}
