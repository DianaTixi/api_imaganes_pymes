import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ArchivoService } from './archivo.service';
import { AuthService } from '../auth/auth.service';
import { storageFile } from '../../middlewares/subir-archivo';
import { FileInterceptor } from '@nestjs/platform-express';

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@UsePipes(ValidationPipe)
@ApiTags('Archivos')
@Controller('archivos')
export class ArchivoController {
  constructor(
    private readonly archivoService: ArchivoService,
    private readonly _authService: AuthService,
  ) {}

  @Post('/cargar')
  @UseInterceptors(FileInterceptor('file', storageFile))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      msg: `Archivo ${file.filename} cargado correctamente`,
    };
  }
}
