import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DivisionEntity } from '../../division/entities/division.entity';
import { Aula } from '../../aula/entities/aula.entity';

@Index('edificios_pkey', ['id'], { unique: true })
@Index('edificios_nombre_key', ['nombre'], { unique: true })
@Entity('edificio', { schema: 'public' })
export class Edificio {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nombre', unique: true, length: 150 })
  nombre: string;

  @Column('character varying', {
    name: 'abreviatura',
    nullable: true,
    length: 20,
  })
  abreviatura: string | null;

  // @Column('enum', {
  //   name: 'tipo',
  //   enum: ['tronco_comun', 'especialidad'],
  //   default: () => 'tronco_comun',
  // })
  // tipo: 'tronco_comun' | 'especialidad';

  @OneToMany(() => Aula, (aula) => aula.idEdificio2)
  aulas: Aula[];

  @ManyToOne(() => DivisionEntity, (division) => division.edificios, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'id_division', referencedColumnName: 'id' }])
  idDivision: DivisionEntity;
}
