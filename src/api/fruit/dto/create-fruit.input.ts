import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFruitInput {
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
