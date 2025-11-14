import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('periodo_pkey', ['id'], { unique: true })
@Index('periodo_nombre_key', ['nombre'], { unique: true })
@Entity('periodo', { schema: 'public' })
export class Periodo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'nombre', unique: true, length: 100 })
  nombre: string;

  @Column('date', { name: 'fecha_inicio' })
  fechaInicio: string;

  @Column('date', { name: 'fecha_fin' })
  fechaFin: string;

  @Column('enum', {
    name: 'privilegio_default',
    enum: ['profesor', 'grupo', 'asignatura', 'sin_privilegio'],
    default: () => 'sin_privilegio',
  })
  privilegioDefault: 'profesor' | 'grupo' | 'asignatura' | 'sin_privilegio';

  @Column('boolean', { name: 'activo', default: () => 'false' })
  activo: boolean;
}
