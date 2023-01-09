import { CreateUserDto } from "src/user/dto";
import { UserRepository } from "src/user/user.repository";

export class AuthService{
    constructor(private readonly userRepository: UserRepository) {}

    async validateUser(username: string, pass: string): Promise<any>{
        const user = await this.userRepository._findOne(username);
        const data = user.data as CreateUserDto;
        if(data.password === pass){
            const {password, ...result} = data;
            return result;
        }
        return null;
    }

}