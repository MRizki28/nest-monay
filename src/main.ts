import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import * as bodyParser from 'body-parser';
import { BadRequestException, HttpStatus, UnprocessableEntityException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HttpExceptionFilter } from './config/http.exception';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (validationErrors: ValidationError[] = []) => {
      return new UnprocessableEntityException({
        status: 'Check your validation',
        message: validationErrors.map((error) => ({
          field: error.property,
          error: Object.values(error.constraints).join(', '),
        })),
      });
    }
  }));
  app.use(bodyParser.json());
  await app.listen(3033);
}
bootstrap();
