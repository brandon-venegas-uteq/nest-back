import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDivisionDto {
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'no puede estar vacio el nombre' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'no puede estar vacio la abreviatura' })
  abreviatura: string | null;
}
