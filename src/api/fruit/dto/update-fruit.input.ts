import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';
import { CreateFruitInput } from './create-fruit.input';

@InputType()
export class UpdateFruitInput extends PartialType(CreateFruitInput) {
  @IsString({ message: 'El nombre debe ser un texto!' })
  @Field({ nullable: true })
  nombre?: string;

  @IsString({ message: 'La familia debe ser un texto!' })
  @Field({ nullable: true })
  familia?: string;

  @IsString({ message: 'La variedad debe ser un texto!' })
  @Field({ nullable: true })
  variedad?: string;

  @IsString({ message: 'El nombre cientifico debe ser un texto!' })
  @Field({ nullable: true })
  nombreCientifico?: string;

  @IsString({ message: 'La descripcion debe ser un texto!' })
  @Field({ nullable: true })
  descripcion?: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field({ nullable: true })
  color?: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field({ nullable: true })
  sabor?: string;

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field({ nullable: true })
  temporada?: string;

  @IsArray()
  @Field(() => [String], { nullable: true })
  metodosDeConsumo?: string[];

  @IsArray()
  @Field(() => [String], { nullable: true })
  usosCulinarios?: string[];

  @IsString({ message: 'Este campo debe ser un texto!' })
  @Field({ nullable: true })
  datosCuriosos?: string;
}
