import { ApiProperty } from '@nestjs/swagger';

export class CreateAsignaturaDto {
  id: number;
  @ApiProperty({ description: 'The name of the cat' })
  nombre: string;
  abreviatura: string | null;
  colorIdentificador: string | null;
  tipo: 'tronco_comun' | 'especialidad';
  horasSemanales: number;
  duracionBloqueHorasMin: number;
  duracionBloqueHorasMax: number;
}
