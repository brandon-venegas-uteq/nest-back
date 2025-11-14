import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { Estudiante } from '../../estudiante/entities/estudiante.entity';

@Index('usuarios_correo_electronico_key', ['correoElectronico'], {
  unique: true,
})
@Index('usuarios_pkey', ['id'], { unique: true })
@Entity('usuario', { schema: 'public' })
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nombre', length: 100 })
  nombre: string;

  @Column('character varying', { name: 'apellido_paterno', length: 100 })
  apellidoPaterno: string;

  @Column('character varying', {
    name: 'apellido_materno',
    nullable: true,
    length: 100,
  })
  apellidoMaterno: string | null;

  @Column('character varying', {
    name: 'correo_electronico',
    unique: true,
    length: 255,
  })
  correoElectronico: string;

  @Column('character varying', { name: 'contrasena', length: 255 })
  contrasena: string;

  @Column('enum', { name: 'rol', enum: ['admin', 'profesor', 'estudiante'] })
  rol: 'admin' | 'profesor' | 'estudiante';

  @Column('timestamp with time zone', {
    name: 'fecha_registro',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  fechaRegistro: Date | null;

  @OneToOne(() => Estudiante, (estudiante) => estudiante.idUsuario2)
  estudiante: Estudiante;

  @OneToOne(() => Profesor, (profesor) => profesor.idUsuario2)
  profesor: Profesor;
}
