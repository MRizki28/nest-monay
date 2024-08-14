"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const bodyParser = require("body-parser");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (validationErrors = []) => {
            return new common_1.UnprocessableEntityException({
                status: 'Check your validation',
                message: validationErrors.map((error) => ({
                    field: error.property,
                    error: Object.values(error.constraints).join(', '),
                })),
            });
        }
    }));
    app.use(bodyParser.json());
    await app.listen(3002);
}
bootstrap();
//# sourceMappingURL=main.js.map