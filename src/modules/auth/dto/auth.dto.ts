import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AuthDto {
  @Expose()
  usu_id: number;

  @Expose()
  usu_nombre: string;

  @Expose()
  usu_correo: string;

  @Expose()
  usu_activo: boolean;

  @Expose()
  usu_fecha_registro: Date | null;

  @Expose()
  emp_id: number;

  @Expose()
  usu_administrador: boolean;

  @Expose()
  usu_superusuario: boolean;
}
