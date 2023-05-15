import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { ClienteImagenService } from './cliente-imagen.service';
import { postAgregarImageDto } from './dto/postAgregarImage.dto';

@Controller('cliente-imagen')
export class ClienteImagenController {
  constructor(private readonly clienteImagenService: ClienteImagenService) {}

  @Post('')
  //@UseInterceptors(FileInterceptor('File', storageFile))
  async insertarImagen(@Body() _postAgregarImageDto: postAgregarImageDto) {
    return await this.clienteImagenService.insertImage(_postAgregarImageDto);
  }

  @Get(':cli_id/:nombre')
  async obtenerImgenesPor(
    @Param('cli_id') cli_id: number,
    @Param('nombre') nombre: string,
  ) {
    return await this.clienteImagenService.obtenerArchivoCedula(cli_id, nombre);
  }

  @Put('modificar')
  async modificarImagen(@Body() _postAgregarImageDto: postAgregarImageDto) {
    return await this.clienteImagenService.updateImage(_postAgregarImageDto);
  }
}
