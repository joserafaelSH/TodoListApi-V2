import { Injectable } from '@nestjs/common';
import { ResponseDto } from 'src/common/dto/response.dto';
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

    _findOne(id: string) {
        const user = this._users.find(
            (user) => user.email === id,
        );

        if(user){
            const response: ResponseDto = {data: user, message: 'User found'}
            return response;
        };
        const response: ResponseDto = {data: null, message: "User not found"}
        return response;
        
    }

    findAll() {
        const serializerUsers: SerializedUserDto[] =
            this._users.map((user) => ({
                id: user.email,
                name: user.name,
                email: user.email,
            }));
        
        if(serializerUsers.length === 0){
            const response: ResponseDto = {data: serializerUsers, message: 'No users found'}
            return response;
        };
        const response: ResponseDto = {data: serializerUsers, message: `${serializerUsers.length} users found`}
        return response;
    }

    findOne(id: string) {
        const user = this._users.find(
            (user) => user.email === id,
        );

        if(user){
            const serializedUsers: SerializedUserDto = {
                id: user.email,
                name: user.name,
                email: user.email,
            }
            const response: ResponseDto = {data: serializedUsers, message: 'User found'}
            return response;
        };
        const response: ResponseDto = {data: null, message: "User not found"}
        return response;
        
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        const updateUsers = this._users.map(
            (user) => {
                if(user.email === id){
                    return user = {...user, ...updateUserDto}
                }
                return user;
        },
        );
        this._users = updateUsers;
        const response: ResponseDto = {data: updateUserDto, message: "User Updated"}
        return response;
        
    }

    remove(id: string) {
        let control:boolean = false;
        const updateUsers = this._users.filter(
            (user) => {
                if(user.email !== id){
                    return user;
                }
                control = true;
        },
        );
        this._users = updateUsers;
        const response: ResponseDto = {data: id, message: control ?"User Deleted" : "User not found"}
        return response;
    }
}
