import { Injectable } from '@nestjs/common';
import { ResponseDto } from 'src/common/dto/response.dto';
import { CreateUserDto, SerializedUserDto } from '../dto';
import { UserRepository } from '../user.repository';

@Injectable()
export class CreateUserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    create(user: CreateUserDto) {
        const serializedUser: SerializedUserDto ={
            id: user.email,
            email: user.email,
            name: user.name,
        }
        this.userRepository.users.push(user);
        const response: ResponseDto = {data: serializedUser, message: "User created"}
        return response;
    }

    //cria o usuario no bd aqui
}
