import {
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export class ResetPasswordDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    access_token: string;

    @IsString()
    @IsNotEmpty()
    @Matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
    )
    password: string;
}
