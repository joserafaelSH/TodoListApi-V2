import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
    CreateUserDto,
) {
    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    name?: string;
}
