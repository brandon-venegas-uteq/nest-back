import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grupo } from '../../grupo/entities/grupo.entity';

@Index('turnos_pkey', ['id'], { unique: true })
@Index('turnos_nombre_turno_key', ['nombre'], { unique: true })
@Entity('turno', { schema: 'public' })
export class Turno {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nombre', unique: true, length: 100 })
  nombre: string;

  @Column('smallint', { name: 'dia_inicio' })
  diaInicio: number;

  @Column('smallint', { name: 'dia_fin' })
  diaFin: number;

  @Column('time without time zone', { name: 'hora_inicio' })
  horaInicio: string;

  @Column('time without time zone', { name: 'hora_fin' })
  horaFin: string;

  @OneToMany(() => Grupo, (grupo) => grupo.idTurno)
  grupos: Grupo[];
}
