import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class CreateUserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    //cria o usuario no bd aqui
}
