import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import config from './config/configurations';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(config.port);
  await app.listen(config.port);
}
bootstrap();
