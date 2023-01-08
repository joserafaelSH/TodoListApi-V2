import { INestApplication } from '@nestjs/common';
import {
    DocumentBuilder,
    SwaggerModule,
} from '@nestjs/swagger';

export const setup_swagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('AgendaTodoList API')
        .setVersion('2.0')
        .build();

    const document = SwaggerModule.createDocument(
        app,
        config,
    );

    const swagger_ui_config = {
        customSiteTitle: 'AgendaTodoList API',
        swaggerOptions: {
            defaultModelsExpandDepth: -1,
            persistAuthorization: true,
        },
        customCss:
            '#swagger-ui > section > div.swagger-ui > div:nth-child(2) > ' +
            'div:nth-child(4) { margin-bottom: 80px; }\n' +
            '.response-controls { display: none !important; }\n' +
            '.content-type { display: none !important; }\n',
    };

    SwaggerModule.setup(
        'api',
        app,
        document,
        swagger_ui_config,
    );
};
