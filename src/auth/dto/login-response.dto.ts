import { ApiProperty } from '@nestjs/swagger';
import { SerializedUserDto } from 'src/user/dto/serialized-user.dto';

export class LoginResponseDto {
    @ApiProperty()
    access_token: string;

    @ApiProperty()
    user: SerializedUserDto;
}
