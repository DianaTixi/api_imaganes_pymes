import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SigInDto {
  @ApiProperty({ description: 'Alias asignado' })
  @IsNotEmpty({ message: 'Falta alias' })
  usu_alias: string;

  @ApiProperty({ description: 'Contraseña' })
  @IsNotEmpty({ message: 'Falta usu_password' })
  usu_password: string;
}
