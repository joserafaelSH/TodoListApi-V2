import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export class BcryptService{
    
    hashPassword(password: string):string{
        return  bcrypt.hashSync(password, 5);
    }

    comparePassword(password: string, hash: string):boolean{
        return bcrypt.compareSync(password, hash);
    }
}