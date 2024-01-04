import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateFruitInput } from './dto/create-fruit.input';
import { UpdateFruitInput } from './dto/update-fruit.input';
import { Fruit } from './entities/fruit.entity';
import { FruitService } from './fruit.service';

@Resolver(() => Fruit)
export class FruitResolver {
  constructor(private readonly fruitService: FruitService) {}

  @Query(() => [Fruit])
  findAll() {
    return this.fruitService.findAll();
  }

  @Query(() => Fruit)
  findOne(@Args('id') id: string) {
    return this.fruitService.findOne(id);
  }

  @Mutation(() => Fruit)
  createFruit(@Args('createFruitInput') createFruitInput: CreateFruitInput) {
    return this.fruitService.create(createFruitInput);
  }

  @Mutation(() => Fruit)
  updateFruit(@Args('updateFruitInput') updateFruitInput: UpdateFruitInput) {
    return this.fruitService.update(updateFruitInput._id, updateFruitInput);
  }

  @Mutation(() => Fruit)
  removeFruit(@Args('id') id: string) {
    return this.fruitService.remove(id);
  }
}
