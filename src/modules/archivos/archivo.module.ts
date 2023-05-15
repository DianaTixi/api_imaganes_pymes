import { Module } from '@nestjs/common';
import { ArchivoService } from './archivo.service';
import { AuthModule } from '../auth/auth.module';
import { ArchivoController } from './archivo.controller';

@Module({
  imports: [AuthModule],
  controllers: [ArchivoController],
  providers: [ArchivoService],
  exports: [ArchivoService],
})
export class ArchivoModule {}
