import { Controller, Get } from '@nestjs/common';
import { MonayService } from 'src/service/monay/monay/monay.service';

@Controller('monay')
export class MonayController {
    constructor(
        private readonly monayService: MonayService
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
