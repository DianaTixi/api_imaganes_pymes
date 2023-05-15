import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
// export class ProductovalidacionService {}
export class utilRespuesta {
  msg = '';
  excepcion?: any;
  data?: any;

  setSuccess() {
    return { msg: 'EXITO', ok: true };
  }

  setSuccessList(data: any) {
    return { msg: 'EXITO', data, ok: true };
  }

  setSuccessObject(data: any) {
    return { msg: 'EXITO', data, ok: true };
  }

  setSuccessEliminacion() {
    return { msg: 'Eliminado correcto', ok: true };
  }

  setError(excepcion: any) {
    console.log(excepcion);
    if (JSON.stringify(excepcion).includes('query')) {
      return { codigo: 4, msg: 'ERROR', excepcion: 'BASE DE DATOS' };
    } else {
      throw new HttpException(
        { codigo: 4, msg: 'ERROR', excepcion: excepcion },
        HttpStatus.BAD_REQUEST,
      );
      //return { codigo: 4, msg: 'ERROR', excepcion: excepcion };
    }
  }
}
