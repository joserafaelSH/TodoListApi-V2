import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { CreateUserService } from './services/create-user.service';

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        UserRepository,
        CreateUserService,
    ],
    exports: [UserRepository],
})
export class UserModule {}
