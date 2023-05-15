import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class respuestaGeneral {
  @Expose()
  @ApiProperty({ example: 200 })
  codigo: number;
  @Expose()
  @ApiProperty({ example: 'EXITO' })
  msg: string;
  @Expose()
  @ApiProperty({ example: [] })
  data: [];
}
