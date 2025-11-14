import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';

@Index('uq_profesor_dia_hora', ['dia', 'hora', 'idProfesor'], { unique: true })
@Index('horario_profesor_pkey', ['id'], { unique: true })
@Entity('horario_profesor', { schema: 'public' })
export class HorarioProfesor {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'id_profesor', unique: true })
  idProfesor: number;

  @Column('enum', {
    name: 'dia',
    unique: true,
    enum: [
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
      'domingo',
    ],
  })
  dia:
    | 'lunes'
    | 'martes'
    | 'miercoles'
    | 'jueves'
    | 'viernes'
    | 'sabado'
    | 'domingo';

  @Column('time without time zone', { name: 'hora', unique: true })
  hora: string;

  @Column('boolean', { name: 'disponible', default: () => 'true' })
  disponible: boolean;

  @ManyToOne(() => Profesor, (profesor) => profesor.horarioProfesors, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_profesor', referencedColumnName: 'id' }])
  idProfesor2: Profesor;
}
