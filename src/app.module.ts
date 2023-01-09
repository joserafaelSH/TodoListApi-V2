import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { CreateUserService } from './user/services/create-user.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env`,
        }),
        AuthModule,
        UserModule,
        TodoModule,
    ],
    controllers: [AppController],
    providers: [AppService, CreateUserService],
})
export class AppModule {}
