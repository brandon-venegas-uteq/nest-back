import { Column, Entity, Index } from 'typeorm';

@Index('profesor_aula_pkey', ['idAula', 'idPeriodo', 'idProfesor'], {
  unique: true,
})
@Entity('profesor_aula', { schema: 'public' })
export class ProfesorAula {
  @Column('integer', { primary: true, name: 'id_profesor' })
  idProfesor: number;

  @Column('integer', { primary: true, name: 'id_aula' })
  idAula: number;

  @Column('integer', { primary: true, name: 'id_periodo' })
  idPeriodo: number;
}
