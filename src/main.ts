import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setup_swagger } from './config/setup-swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );

    setup_swagger(app);

    const CONFIG_SERVICE = app.get(ConfigService);
    const PORT = CONFIG_SERVICE.get('PORT');

    await app.listen(PORT);
}
bootstrap();
