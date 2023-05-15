import { ClienteImagenModule } from './modules/cliente-imagen-archivo/cliente-imagen.module';
import { ClienteImagenController } from './modules/cliente-imagen-archivo/cliente-imagen.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  controllers: [ClienteImagenController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        HOST_DB: Joi.string().required(),
        DBNAME: Joi.string().required(),
        USERNAMEDB: Joi.string().required(),
        PASSWORDDB: Joi.string().required(),
        PORTDB: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
        AWS_REGION: Joi.string().required(),
        AWS_ACCESS_USER: Joi.string().required(),
        AWS_SECRET_KEY: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    ConfigModule,
    AuthModule,
    ClienteImagenModule,
  ],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get<number>('PORT') || 3000;
  }
}
