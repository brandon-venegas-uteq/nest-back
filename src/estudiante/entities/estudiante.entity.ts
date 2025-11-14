import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grupo } from '../../grupo/entities/grupo.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Index('estudiantes_pkey', ['id'], { unique: true })
@Index('estudiantes_id_usuario_key', ['idUsuario'], { unique: true })
@Index('estudiantes_matricula_key', ['matricula'], { unique: true })
@Entity('estudiante', { schema: 'public' })
export class Estudiante {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'id_usuario', unique: true })
  idUsuario: number;

  @Column('character varying', {
    name: 'matricula',
    nullable: true,
    unique: true,
    length: 50,
  })
  matricula: string | null;

  @ManyToOne(() => Grupo, (grupo) => grupo.estudiantes, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn([{ name: 'id_grupo', referencedColumnName: 'id' }])
  idGrupo: Grupo;

  @OneToOne(() => Usuario, (usuario) => usuario.estudiante, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_usuario', referencedColumnName: 'id' }])
  idUsuario2: Usuario;
}
