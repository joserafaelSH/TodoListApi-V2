import { Injectable } from '@nestjs/common';
import {
    CreateUserDto,
    SerializedUserDto,
    UpdateUserDto,
} from './dto';

@Injectable()
export class UserRepository {
    private _users: CreateUserDto[] = [];

    public get users() {
        return this._users;
    }

    findAll() {
        const serializerUsers: SerializedUserDto[] =
            this._users.map((user) => ({
                id: user.email,
                name: user.name,
                email: user.email,
            }));
        return serializerUsers;
    }

    findOne(id: string) {
        const user = this._users.find(
            (user) => user.email === id,
        );
        if (user) {
            return {
                id: user.email,
                name: user.name,
                email: user.email,
            };
        }
        return user;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return `This action removes a #${id} user`;
    }
}
