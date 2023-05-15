import { IsEmpty, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeviceDto {
  @ApiProperty({ description: 'Id del dispositivo' })
  @IsNotEmpty({ message: 'Falta device' })
  device: string;

  @ApiProperty({ description: 'Empleado' })
  @IsNotEmpty({ message: 'Falta id del empleado' })
  id: number;
}
