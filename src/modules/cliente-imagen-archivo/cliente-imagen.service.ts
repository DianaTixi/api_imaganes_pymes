/*
https://docs.nestjs.com/providers#services
*/
import * as fileType from 'file-type';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { postAgregarImageDto } from './dto/postAgregarImage.dto';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { ClienteImagen } from '../../entities/ClienteImagen.entity';

@Injectable()
export class ClienteImagenService {
  constructor(
    @InjectRepository(ClienteImagen)
    private readonly _clienteImagenService: Repository<ClienteImagen>,
  ) {}

  async insertImage(postAgregarImage: postAgregarImageDto) {
    const Key = uuidv4();
    const s3Bucket = new AWS.S3({
      region: 'us-east-1',
      params: { Bucket: process.env.AWS_BUCKET },
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_USER,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    const path = 'imagenes/';
    const buffer = Buffer.from(postAgregarImage.file, 'base64');
    const type = await fileType.fromBuffer(buffer);
    if (!type?.mime)
      throw new HttpException(
        'El archivo no es correcto',
        HttpStatus.BAD_REQUEST,
      );
    const data = {
      Key: path + Key,
      Body: buffer,
      ContentType: type.mime,
      Bucket: process.env.AWS_BUCKET,
      /*  ACL: 'public-read', */
    };
    try {
      await s3Bucket.putObject(data).promise();
    } catch (error) {
      console.log(error);
      console.log('Error uploading data: ', data);
      throw new HttpException(
        'El archivo no se guardo en S3',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      console.log('Save');
      const bodyClienteImagen: Partial<ClienteImagen> = {
        cliImgArchivo: path + Key,
        cliId: postAgregarImage.cli_id,
        cliImgNombre: postAgregarImage.nombre,
      };

      const guardarClienteImagen = await this._clienteImagenService.save(
        bodyClienteImagen,
      );

      return {
        ok: true,
        ClienteImagen: guardarClienteImagen,
      };
    } catch (error) {
      console.log('error error' + error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async obtenerArchivoCedula(cli_id: number, nombre: string) {
    if (!cli_id)
      throw new HttpException('Ingrese Codigo Cliente', HttpStatus.BAD_REQUEST);
    const s3Bucket = new AWS.S3({
      region: 'us-east-1',
      params: { Bucket: process.env.AWS_BUCKET },
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_USER,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    const clienteImagen = await this._clienteImagenService.findOneBy({
      cliId: cli_id,
      cliImgNombre: nombre,
    });
    if (!clienteImagen)
      throw new HttpException('Sin informacion', HttpStatus.BAD_REQUEST);
    const url = s3Bucket.getSignedUrl('getObject', {
      Bucket: process.env.AWS_BUCKET,
      Key: clienteImagen.cliImgArchivo,
      Expires: 60 * 20,
    });
    const resutl = {
      url,
      nombre: clienteImagen.cliImgNombre,
    };

    return resutl;
  }

  async updateImage(postAgregarImage: postAgregarImageDto) {
    const Key = uuidv4();
    const s3Bucket = new AWS.S3({
      region: 'us-east-1',
      params: { Bucket: process.env.AWS_BUCKET },
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_USER,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    const path = 'imagenes/';
    const buffer = Buffer.from(postAgregarImage.file, 'base64');
    const type = await fileType.fromBuffer(buffer);
    if (!type?.mime)
      throw new HttpException(
        'El archivo no es correcto',
        HttpStatus.BAD_REQUEST,
      );
    const data = {
      Key: path + Key,
      Body: buffer,
      ContentType: type.mime,
      Bucket: process.env.AWS_BUCKET,
      /*  ACL: 'public-read', */
    };
    try {
      await s3Bucket.putObject(data).promise();
    } catch (error) {
      console.log(error);
      console.log('Error uploading data: ', data);
      throw new HttpException(
        'El archivo no se guardo en S3',
        HttpStatus.BAD_REQUEST,
      );
    }
    try {
      console.log('UPDATE');
      const bodyClienteImagen: Partial<ClienteImagen> = {
        cliImgArchivo: path + Key,
        cliId: postAgregarImage.cli_id,
        cliImgNombre: postAgregarImage.nombre,
      };

      const modificarClienteImagen = await this._clienteImagenService.query(
        'update cliente_imagen set cli_img_archivo = $1 where cli_id = $2 and cli_img_nombre = $3',
        [
          bodyClienteImagen.cliImgArchivo,
          bodyClienteImagen.cliId,
          bodyClienteImagen.cliImgNombre,
        ],
      );

      return {
        ok: true,
        msg: 'Se ha modificado correctamente',
      };
    } catch (error) {
      console.log('error error' + error);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
