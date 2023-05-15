import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('idx_clu_cliente', ['cliCodigo', 'cliId', 'entId'], {})
@Index('cliente_uk_codigo', ['cliCodigo', 'eprId'], { unique: true })
@Index('cliente_pkey', ['cliId'], { unique: true })
@Index('cliente_idx_entidad', ['entId'], {})
@Index('cliente_idx_empresa', ['eprId'], {})
@Entity('cliente', { schema: 'public' })
export class Cliente {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'cli_id' })
  cliId: number;

  @Column('character varying', { name: 'cli_codigo', unique: true, length: 30 })
  cliCodigo: string;

  @Column('integer', { name: 'ent_id' })
  entId: number;

  @Column('integer', { name: 'zon_id', nullable: true })
  zonId: number | null;

  @Column('character varying', {
    name: 'cli_observacion',
    nullable: true,
    length: 500,
  })
  cliObservacion: string | null;

  @Column('numeric', {
    name: 'cli_cupo',
    nullable: true,
    precision: 15,
    scale: 4,
    default: () => '0',
  })
  cliCupo: string | null;

  @Column('integer', { name: 'lpr_id', nullable: true })
  lprId: number | null;

  @Column('boolean', {
    name: 'cli_impuesto',
    nullable: true,
    default: () => 'true',
  })
  cliImpuesto: boolean | null;

  @Column('boolean', {
    name: 'cli_bloqueo',
    nullable: true,
    default: () => 'false',
  })
  cliBloqueo: boolean | null;

  @Column('boolean', {
    name: 'cli_tarjeta',
    nullable: true,
    default: () => 'false',
  })
  cliTarjeta: boolean | null;

  @Column('boolean', {
    name: 'cli_ilimitado',
    nullable: true,
    default: () => 'true',
  })
  cliIlimitado: boolean | null;

  @Column('integer', { name: 'cli_tipocli', nullable: true })
  cliTipocli: number | null;

  @Column('boolean', {
    name: 'cli_activo',
    nullable: true,
    default: () => 'false',
  })
  cliActivo: boolean | null;

  @Column('boolean', { name: 'locked', nullable: true, default: () => 'false' })
  locked: boolean | null;

  @Column('character varying', { name: 'ent_nombre_comercial', length: 200 })
  entNombreComercial: string;

  @Column('character', { name: 'cli_tiposujeto', nullable: true, length: 1 })
  cliTiposujeto: string | null;

  @Column('character', { name: 'cli_sexo', nullable: true, length: 1 })
  cliSexo: string | null;

  @Column('character', { name: 'cli_estadocivil', nullable: true, length: 1 })
  cliEstadocivil: string | null;

  @Column('character', { name: 'cli_ingresos', nullable: true, length: 1 })
  cliIngresos: string | null;

  @Column('boolean', {
    name: 'cli_parterel',
    nullable: true,
    default: () => 'false',
  })
  cliParterel: boolean | null;

  @Column('boolean', {
    name: 'cli_codigosuplementario',
    nullable: true,
    default: () => 'false',
  })
  cliCodigosuplementario: boolean | null;

  @Column('boolean', {
    name: 'cli_actualizado',
    nullable: true,
    default: () => 'false',
  })
  cliActualizado: boolean | null;

  @Column('numeric', {
    name: 'cli_porc_retencion_iva',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  cliPorcRetencionIva: string | null;

  @Column('numeric', {
    name: 'cli_porc_retencion_fte',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  cliPorcRetencionFte: string | null;

  @Column('integer', { name: 'reg_id', nullable: true })
  regId: number | null;

  @Column('boolean', {
    name: 'cli_retencion',
    nullable: true,
    default: () => 'true',
  })
  cliRetencion: boolean | null;

  @Column('timestamp without time zone', {
    name: 'cli_fecha_actualizacion',
    nullable: true,
  })
  cliFechaActualizacion: Date | null;

  @Column('boolean', {
    name: 'cli_actualizado_verif',
    nullable: true,
    default: () => 'false',
  })
  cliActualizadoVerif: boolean | null;

  @Column('timestamp without time zone', {
    name: 'cli_fecha_act_verif',
    nullable: true,
  })
  cliFechaActVerif: Date | null;

  @Column('integer', { name: 'epr_id', unique: true })
  eprId: number;

  @Column('boolean', {
    name: 'cli_hace_retencion',
    nullable: true,
    default: () => 'false',
  })
  cliHaceRetencion: boolean | null;

  @Column('boolean', {
    name: 'cli_envio_correo',
    nullable: true,
    default: () => 'false',
  })
  cliEnvioCorreo: boolean | null;

  @Column('integer', { name: 'cli_tcuenta', nullable: true })
  cliTcuenta: number | null;

  @Column('character varying', {
    name: 'cli_nrocuenta',
    nullable: true,
    length: 100,
  })
  cliNrocuenta: string | null;

  @Column('character varying', {
    name: 'cli_beneficiario',
    nullable: true,
    length: 300,
  })
  cliBeneficiario: string | null;

  @Column('boolean', {
    name: 'cli_cuenta_propia',
    nullable: true,
    default: () => 'false',
  })
  cliCuentaPropia: boolean | null;

  @Column('character varying', {
    name: 'cli_tipo_identificacion_beneficiario',
    nullable: true,
    length: 1,
  })
  cliTipoIdentificacionBeneficiario: string | null;

  @Column('character varying', {
    name: 'cli_identificacion_beneficiario',
    nullable: true,
    length: 30,
  })
  cliIdentificacionBeneficiario: string | null;

  @Column('character varying', {
    name: 'cli_tipo_empresa',
    nullable: true,
    length: 300,
  })
  cliTipoEmpresa: string | null;

  @Column('character varying', {
    name: 'cli_categoria',
    nullable: true,
    length: 300,
  })
  cliCategoria: string | null;

  @Column('integer', { name: 'tcb_id', nullable: true })
  tcbId: number | null;
  clienteImagens: any;
}
