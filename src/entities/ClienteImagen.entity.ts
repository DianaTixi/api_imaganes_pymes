import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cliente } from './Cliente.entity';

@Index('cliente_imagen_pkey', ['cliImgId'], { unique: true })
@Entity('cliente_imagen', { schema: 'public' })
export class ClienteImagen {
  [x: string]: any;
  @PrimaryGeneratedColumn({ type: 'integer', name: 'cli_img_id' })
  cliImgId: number;

  @Column('character varying', { name: 'cli_img_nombre', length: 255 })
  cliImgNombre: string;

  @Column('character varying', { name: 'cli_img_archivo', length: 255 })
  cliImgArchivo: string;

  @Column('timestamp without time zone', {
    name: 'cli_img_fecha',
    nullable: true,
  })
  cliImgFecha: Date | null;

  @Column('integer', { name: 'cli_id' })
  cliId: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.clienteImagens)
  @JoinColumn([{ name: 'cli_id', referencedColumnName: 'cliId' }])
  cli: Cliente;
}
