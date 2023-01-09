import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    findAll() {
        return this.userRepository.findAll();
    }

    findOne(id: string) {
        return this.userRepository.findOne(id);
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(
            id,
            updateUserDto,
        );
    }

    remove(id: string) {
        return this.userRepository.remove(id);
    }
}
