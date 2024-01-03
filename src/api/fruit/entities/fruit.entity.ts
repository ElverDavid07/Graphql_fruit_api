import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class Fruit {
  @Field({ description: 'id de la fruta' })
  readonly _id: string;
  @Field({ description: 'Nombre de la fruta' })
  @Prop({ isRequired: true, lowercase: true, trim: true })
  name: string;
  @Field({ description: 'Familia de la fruta' })
  @Prop({ isRequired: true, lowercase: true, trim: true })
  family: string;
  @Field({ description: 'Variedad de la fruta', nullable: true })
  @Prop({ isRequired: false, lowercase: true, trim: true })
  variety?: string;
  @Field({ description: 'Nombre cientifico de la fruta' })
  @Prop({ isRequired: true, lowercase: true, trim: true })
  scientificName: string;
  @Field({ description: 'Descripcion de la fruta' })
  @Prop({ isRequired: true, lowercase: true, trim: true })
  description: string;
  @Field({ description: 'Fecha de creacion de la informacion de la fruta' })
  readonly createdAt: Date;
  @Field({
    description: 'Fecha de la actualizacion de la informacion de la fruta',
  })
  readonly updatedAt: Date;
}

export const FruitSchema = SchemaFactory.createForClass(Fruit);
