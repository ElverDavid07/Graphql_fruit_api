import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFruitInput } from './dto/create-fruit.input';
import { UpdateFruitInput } from './dto/update-fruit.input';
import { Fruit } from './entities/fruit.entity';

@Injectable()
export class FruitService {
  constructor(@InjectModel(Fruit.name) private fruitModel: Model<Fruit>) {}

  findAll() {
    return this.fruitModel.find().sort({ createdAt: -1 });
  }

  async findOne(id: string) {
    const fruitFound = await this.fruitModel.findById(id);
    if (!fruitFound) {
      throw new HttpException('Esta fruta no existe!', HttpStatus.NOT_FOUND);
    }
    return fruitFound;
  }

  async create(createFruitInput: CreateFruitInput) {
    const newFruit = await this.fruitModel.create(createFruitInput);
    return await newFruit.save();
  }

  async update(id: string, updateFruitInput: UpdateFruitInput) {
    const fruitFound = await this.fruitModel.findById(id);
    if (!fruitFound) {
      throw new HttpException('Esta fruta no existe!', HttpStatus.NOT_FOUND);
    }
    const fruidUpdated = await this.fruitModel.findByIdAndUpdate(
      id,
      updateFruitInput,
    );
    return fruidUpdated;
  }

  async remove(id: string) {
    const fruitFound = await this.fruitModel.findById(id);
    if (!fruitFound) {
      throw new HttpException('Esta fruta no existe!', HttpStatus.NOT_FOUND);
    }
    const fruidDeleted = await this.fruitModel.findByIdAndDelete(id);
    return fruidDeleted;
  }
}
