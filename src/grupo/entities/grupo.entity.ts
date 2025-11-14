import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estudiante } from '../../estudiante/entities/estudiante.entity';
import { DivisionEntity } from '../../division/entities/division.entity';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { Turno } from '../../turno/entities/turno.entity';
import { HorarioClases } from '../../horario-clases/entities/horario-clase.entity';

@Index('grupos_pkey', ['id'], { unique: true })
@Index('grupos_nombre_key', ['nombre'], { unique: true })
@Entity('grupo', { schema: 'public' })
export class Grupo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nombre', unique: true, length: 100 })
  nombre: string;

  @Column('character varying', {
    name: 'abreviatura',
    nullable: true,
    length: 20,
  })
  abreviatura: string | null;

  @Column('character varying', { name: 'grado', nullable: true, length: 20 })
  grado: string | null;

  @Column('character varying', {
    name: 'color_identificador',
    nullable: true,
    length: 7,
  })
  colorIdentificador: string | null;

  @OneToMany(() => Estudiante, (estudiante) => estudiante.idGrupo)
  estudiantes: Estudiante[];

  @ManyToOne(() => DivisionEntity, (division) => division.grupos, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'id_division', referencedColumnName: 'id' }])
  idDivision: DivisionEntity;

  @ManyToOne(() => Turno, (turno) => turno.grupos, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'id_turno', referencedColumnName: 'id' }])
  idTurno: Turno;

  @ManyToOne(() => Profesor, (profesor) => profesor.grupos, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'tutor_id', referencedColumnName: 'id' }])
  tutor: Profesor;

  @OneToMany(() => HorarioClases, (horarioClases) => horarioClases.idGrupo)
  horarioClases: HorarioClases[];
}
