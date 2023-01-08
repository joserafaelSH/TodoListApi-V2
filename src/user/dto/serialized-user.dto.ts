import { ApiProperty } from '@nestjs/swagger';

export class SerializedUserDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;
}
