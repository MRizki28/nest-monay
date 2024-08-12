import { Controller, Get } from '@nestjs/common';
import { AccountService } from 'src/service/account/account.service';

@Controller('monay')
export class AccountController {
    constructor(
        private readonly monayService: AccountService
    ) {}

    @Get('/')
    async getAllData(): Promise<any> {
        try {
            const data = await this.monayService.getAllData();
            return data;
        } catch (error) {
            console.log(error);
        };
        
    }
}
