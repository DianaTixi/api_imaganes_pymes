import { IJwtPayload } from './../jwt-payload.interface';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';

import { UnauthorizedException, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly _configService: ConfigService,
    @InjectRepository(Usuario)
    private readonly _authService: Repository<Usuario>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: _configService.get<string>('JWT_SECRET'),
    });
  }
  async validate(payload: IJwtPayload) {
    const { usu_alias } = payload;
    const usuAux = await this._authService.query(
      `select usu.usu_id, usu_nombre, usu_apellido, usu_alias, usu_contrasena, 
              usu_activo, usu_administrador, usu.pve_id, emp.emp_id, pve.reg_id
              from usuario usu join empleado emp on emp.usu_id = usu.usu_id 
              join puntoventa pve on pve.pve_id = usu.pve_id
              where usu_alias = $1 `,
      [usu_alias],
    );

    const user: Usuario = plainToInstance(Usuario, usuAux[0]);

    if (!user) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}
