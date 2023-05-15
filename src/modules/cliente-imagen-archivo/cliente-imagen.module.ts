import { ClienteImagenService } from './cliente-imagen.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteImagen } from '../../entities/ClienteImagen.entity';
import { ClienteImagenController } from './cliente-imagen.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteImagen])],
  controllers: [ClienteImagenController],
  providers: [ClienteImagenService],
  exports: [ClienteImagenService],
})
export class ClienteImagenModule {}
