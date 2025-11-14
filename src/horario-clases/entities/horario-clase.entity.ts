import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Aula } from '../../aula/entities/aula.entity';
import { Grupo } from '../../grupo/entities/grupo.entity';
import { ProfesorAsignatura } from '../../profesor-asignatura/entities/profesor-asignatura.entity';

@Index('horario_clases_pkey', ['id'], { unique: true })
@Entity('horario_clases', { schema: 'public' })
export class HorarioClases {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('enum', {
    name: 'dia',
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

  @Column('time without time zone', { name: 'hora' })
  hora: string;

  @ManyToOne(() => Aula, (aula) => aula.horarioClases, { onDelete: 'RESTRICT' })
  @JoinColumn([{ name: 'id_aula', referencedColumnName: 'id' }])
  idAula: Aula;

  @ManyToOne(() => Grupo, (grupo) => grupo.horarioClases)
  @JoinColumn([{ name: 'id_grupo', referencedColumnName: 'id' }])
  idGrupo: Grupo;

  @ManyToOne(
    () => ProfesorAsignatura,
    (profesorAsignatura) => profesorAsignatura.horarioClases,
  )
  @JoinColumn([{ name: 'id_profesor_asignatura', referencedColumnName: 'id' }])
  idProfesorAsignatura: ProfesorAsignatura;
}
