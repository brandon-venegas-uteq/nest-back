import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HorarioClases } from '../../horario-clases/entities/horario-clase.entity';

@Index('profesor_asignatura_pkey', ['id'], { unique: true })
@Entity('profesor_asignatura', { schema: 'public' })
export class ProfesorAsignatura {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'id_profesor' })
  idProfesor: number;

  @Column('integer', { name: 'id_asignatura' })
  idAsignatura: number;

  @Column('integer', { name: 'id_periodo' })
  idPeriodo: number;

  @OneToMany(
    () => HorarioClases,
    (horarioClases) => horarioClases.idProfesorAsignatura,
  )
  horarioClases: HorarioClases[];
}
