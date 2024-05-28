import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurant: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    return this.restaurant.find();
  }
  createRestaurant(CreateRestaurantDto: CreateRestaurantDto) {
    // const newRestaurant = new Restaurant();
    // newRestaurant.name = CreateRestaurantDto.name;
    const newRestaurant = this.restaurant.create(CreateRestaurantDto);
    return this.restaurant.save(newRestaurant);
  }
}
