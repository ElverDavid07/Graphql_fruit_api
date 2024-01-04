import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateFruitInput {
  @IsNotEmpty({ message: 'El nombre es requerido!' })
  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  nombre: string;

  @IsNotEmpty({ message: 'la familia de la fruta es requerida!' })
  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  familia: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field({ nullable: true })
  variedad?: string;

  @IsNotEmpty({ message: 'El nombre cientifico es requerido!' })
  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  nombreCientifico: string;

  @IsNotEmpty({ message: 'La descripcion es requerida!' })
  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  descripcion: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  color: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  sabor: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  temporada: string;

  @IsArray()
  @Field(() => [String])
  metodosDeConsumo: string[];

  @IsArray()
  @Field(() => [String])
  usosCulinarios: string[];

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field()
  datosCuriosos: string;
}
