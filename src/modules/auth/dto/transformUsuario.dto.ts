import { Expose, Type } from 'class-transformer';

export class transformUsuarioDto {
  @Expose({ name: 'usuId' })
  @Type(() => Number)
  usu_id: number;

  @Expose({ name: 'usuNombre' })
  usu_nombre: string;

  @Expose({ name: 'usuAlias' })
  usu_alias: string;

  @Expose({ name: 'usuApellido' })
  usu_apellido: string;

  @Expose({ name: 'usuContrasena' })
  usu_contrasena: string;

  @Expose({ name: 'usuPassword' })
  usu_password: string;

  @Expose({ name: 'usuActivo' })
  usu_activo: boolean;

  @Expose({ name: 'empId' })
  emp_id: number | null;

  @Expose({ name: 'pveId' })
  pve_id: number | null;

  @Expose({ name: 'regId' })
  reg_id: number | null;

  @Expose({ name: 'usuAdministrador' })
  usu_administrador: boolean;

  @Expose({ name: 'puntoventa' })
  puntoventa: string;

  @Expose({ name: 'almacen' })
  almacen: string;

  @Expose({ name: 'region' })
  region: string;
}
