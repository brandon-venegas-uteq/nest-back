import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grupo } from '../../grupo/entities/grupo.entity';
import { HorarioProfesor } from '../../horario-profesor/entities/horario-profesor.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Index('profesores_abreviatura_nombre_key', ['abreviaturaNombre'], {
  unique: true,
})
@Index('profesores_pkey', ['id'], { unique: true })
@Index('profesores_id_usuario_key', ['idUsuario'], { unique: true })
@Entity('profesor', { schema: 'public' })
export class Profesor {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'id_usuario', unique: true })
  idUsuario: number;

  @Column('character varying', {
    name: 'abreviatura_nombre',
    unique: true,
    length: 20,
  })
  abreviaturaNombre: string;

  @Column('character varying', { name: 'telefono', nullable: true, length: 20 })
  telefono: string | null;

  @Column('character varying', { name: 'titulo', nullable: true, length: 100 })
  titulo: string | null;

  @Column('character varying', {
    name: 'color_calendario',
    nullable: true,
    length: 7,
  })
  colorCalendario: string | null;

  @OneToMany(() => Grupo, (grupo) => grupo.tutor)
  grupos: Grupo[];

  @OneToMany(
    () => HorarioProfesor,
    (horarioProfesor) => horarioProfesor.idProfesor2,
  )
  horarioProfesors: HorarioProfesor[];

  @OneToOne(() => Usuario, (usuario) => usuario.profesor, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
