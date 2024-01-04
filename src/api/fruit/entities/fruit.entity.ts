import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class Fruit {
  @Field({ nullable: true })
  readonly _id: string;

  @Field()
  @Prop({ isRequired: true, lowercase: true, trim: true })
  nombre: string;

  @Field()
  @Prop({ isRequired: true, lowercase: true, trim: true })
  familia: string;

  @Field({ nullable: true })
  @Prop({ lowercase: true, trim: true })
  variedad?: string;

  @Field()
  @Prop({ isRequired: true, lowercase: true, trim: true })
  nombreCientifico: string;

  @Field()
  @Prop({ isRequired: true, lowercase: true, trim: true })
  descripcion: string;

  @Field({ nullable: true })
  @Prop({ lowercase: true, trim: true })
  color: string;

  @Field({ nullable: true })
  @Prop({ lowercase: true, trim: true })
  sabor: string;

  @Field({ nullable: true })
  @Prop({ lowercase: true, trim: true })
  temporada: string;

  @Field(() => [String])
  @Prop({ type: [String], lowercase: true, trim: true })
  metodosDeConsumo: string[];

  @Field(() => [String])
  @Prop({ type: [String], lowercase: true, trim: true })
  usosCulinarios: string[];

  @Field({ nullable: true })
  @Prop({ lowercase: true, trim: true })
  datosCuriosos: string;

  @Field({
    description: 'Fecha de creacion de la informacion de la fruta',
    nullable: true,
  })
  readonly createdAt: Date;

  @Field({
    description: 'Fecha de la actualizacion de la informacion de la fruta',
    nullable: true,
  })
  readonly updatedAt: Date;
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
