import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Edificio } from '../../edificio/entities/edificio.entity';
import { HorarioClases } from '../../horario-clases/entities/horario-clase.entity';

@Index('aulas_pkey', ['id'], { unique: true })
@Index('uq_aula_edificio', ['idEdificio', 'nombre'], { unique: true })
@Entity('aula', { schema: 'public' })
export class Aula {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'id_edificio', unique: true })
  idEdificio: number;

  @Column('character varying', { name: 'nombre', unique: true, length: 100 })
  nombre: string;

  @Column('character varying', {
    name: 'abreviatura',
    nullable: true,
    length: 20,
  })
  abreviatura: string | null;

  @Column('character varying', {
    name: 'ubicacion',
    nullable: true,
    length: 50,
  })
  ubicacion: string | null;

  @Column('integer', { name: 'capacidad', nullable: true })
  capacidad: number | null;

  @ManyToOne(() => Edificio, (edificio) => edificio.aulas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'id_edificio', referencedColumnName: 'id' }])
  idEdificio2: Edificio;

  @OneToMany(() => HorarioClases, (horarioClases) => horarioClases.idAula)
  horarioClases: HorarioClases[];
}
