import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Asignatura } from '../../asignatura/entities/asignatura.entity';
import { Edificio } from '../../edificio/entities/edificio.entity';
import { Grupo } from '../../grupo/entities/grupo.entity';

@Index('divisiones_abreviatura_key', ['abreviatura'], { unique: true })
@Index('divisiones_pkey', ['id'], { unique: true })
@Index('divisiones_nombre_key', ['nombre'], { unique: true })
@Entity('division', { schema: 'public' })
export class DivisionEntity {
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

  @OneToMany(() => Asignatura, (asignatura) => asignatura.division)
  asignaturas: Asignatura[];

  @OneToMany(() => Edificio, (edificio) => edificio.idDivision)
  edificios: Edificio[];

  @OneToMany(() => Grupo, (grupo) => grupo.idDivision, { eager: true })
  grupos: Grupo[];
}
