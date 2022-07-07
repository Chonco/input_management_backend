import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { FoodType } from '../models/food-type.model';

@Injectable()
export class FoodTypeService {
  constructor(private dataSource: DataSource) {}

  async getAll(): Promise<FoodType[]> {
    return await this.dataSource.getRepository(FoodType).find();
  }

  async getOrCreate(names: string[]) {
    const foodTypes: FoodType[] = null;

    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      const foodType = await this.dataSource
        .getRepository(FoodType)
        .findOneBy({ name });

      if (!foodType) {
        const savedFoodType = new FoodType();
        savedFoodType.name = name;
        foodTypes.push(
          await this.dataSource.getRepository(FoodType).save(savedFoodType),
        );
      } else {
        foodTypes.push(foodType);
      }
    }

    return foodTypes;
  }
}
