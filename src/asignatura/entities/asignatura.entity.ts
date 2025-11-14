import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DivisionEntity } from '../../division/entities/division.entity';

@Index('asignaturas_abreviatura_key', ['abreviatura'], { unique: true })
@Index('asignaturas_nombre_key', ['nombre'], { unique: true })
@Entity('asignatura', { schema: 'public' })
export class Asignatura {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nombre', unique: true, length: 150 })
  nombre: string;

  @Column('character varying', {
    name: 'abreviatura',
    nullable: true,
    unique: true,
    length: 20,
  })
  abreviatura: string | null;

  @Column('character varying', {
    name: 'color_identificador',
    nullable: true,
    length: 7,
  })
  colorIdentificador: string | null;

  @Column('enum', {
    name: 'tipo',
    enum: ['tronco_comun', 'especialidad'],
    default: () => 'tronco_comun',
  })
  tipo: string;

  @Column('integer', { name: 'horas_semanales' })
  horasSemanales: number;

  @Column('integer', { name: 'duracion_bloque_horas_min', default: () => '1' })
  duracionBloqueHorasMin: number;

  @Column('integer', { name: 'duracion_bloque_horas_max' })
  duracionBloqueHorasMax: number;

  @ManyToOne(() => DivisionEntity, (division) => division.asignaturas, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'division_id', referencedColumnName: 'id' }])
  division: DivisionEntity;
}
