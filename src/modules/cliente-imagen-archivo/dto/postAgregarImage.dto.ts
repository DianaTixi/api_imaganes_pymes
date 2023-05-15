import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class postAgregarImageDto {
  @ApiProperty()
  @Expose()
  @IsNumber()
  @IsNotEmpty({ message: 'Falta cli_id' })
  cli_id: number;

  @ApiProperty()
  @Expose()
  @IsNotEmpty({ message: 'Falta file' })
  file: string;

  @ApiProperty()
  @Expose()
  @IsNotEmpty({ message: 'Falta nombre' })
  nombre: string;
}
