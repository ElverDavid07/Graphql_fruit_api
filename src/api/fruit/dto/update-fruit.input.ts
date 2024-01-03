import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateFruitInput } from './create-fruit.input';

@InputType()
export class UpdateFruitInput extends PartialType(CreateFruitInput) {
  @Field()
  _id: string;
  @Field()
  name: string;
  @Field()
  family: string;
  @Field({ nullable: true })
  variety?: string;
  @Field()
  scientificName: string;
  @Field()
  description: string;
}
