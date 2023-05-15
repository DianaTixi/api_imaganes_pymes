import { Expose } from 'class-transformer';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('usuario_pkey', ['usuId'], { unique: true })
@Entity('usuario', { schema: 'public' })
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'usu_id' })
  @Expose({ name: 'usu_id' })
  usuId: number;

  @Column('text', { name: 'usu_nombre', nullable: true })
  @Expose({ name: 'usu_nombre' })
  usuNombre: string | null;

  @Column('text', { name: 'usu_apellido', nullable: true })
  @Expose({ name: 'usu_apellido' })
  usuApellido: string | null;

  @Column('text', { name: 'usu_alias', nullable: true })
  @Expose({ name: 'usu_alias' })
  usuAlias: string | null;

  @Column('text', { name: 'usu_contrasena', nullable: true })
  @Expose({ name: 'usu_contrasena' })
  usuContrasena: string | null;

  @Column('boolean', {
    name: 'usu_activo',
    nullable: true,
    default: () => 'true',
  })
  @Expose({ name: 'usu_activo' })
  usuActivo: boolean | null;

  @Column('boolean', { name: 'usu_administrador', nullable: true })
  @Expose({ name: 'usu_administrador' })
  usuAdministrador: boolean | null;

  @Column('integer', { name: 'emp_id', nullable: true })
  @Expose({ name: 'emp_id' })
  empId: number | null;

  @Column('integer', { name: 'pve_id', nullable: true })
  @Expose({ name: 'pve_id' })
  pveId: number | null;

  @Column('integer', { name: 'reg_id', nullable: true })
  @Expose({ name: 'reg_id' })
  regId: number | null;

  @Column('text', { name: 'puntoventa', nullable: true })
  @Expose({ name: 'puntoventa' })
  puntoventa: string | null;

  @Column('text', { name: 'almacen', nullable: true })
  @Expose({ name: 'almacen' })
  almacen: string | null;

  @Column('text', { name: 'region', nullable: true })
  @Expose({ name: 'region' })
  region: string | null;
}
