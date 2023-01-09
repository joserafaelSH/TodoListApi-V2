import { Injectable } from '@nestjs/common';
import { CreateUserDto, SerializedUserDto } from '../dto';
import { UserRepository } from '../user.repository';

@Injectable()
export class CreateUserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    create(user: CreateUserDto) {
        return this.userRepository.users.push(user);
    }

    //cria o usuario no bd aqui
}
