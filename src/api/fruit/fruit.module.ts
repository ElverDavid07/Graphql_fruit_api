import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Fruit, FruitSchema } from './entities/fruit.entity';
import { FruitResolver } from './fruit.resolver';
import { FruitService } from './fruit.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fruit.name, schema: FruitSchema }]),
  ],
  providers: [FruitResolver, FruitService],
})
export class FruitModule {}
