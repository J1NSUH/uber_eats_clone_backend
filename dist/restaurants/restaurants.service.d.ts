import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantService {
    private readonly restaurant;
    constructor(restaurant: Repository<Restaurant>);
    getAll(): Promise<Restaurant[]>;
    createRestaurant(CreateRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    updateRestaurant({ id, data }: UpdateRestaurantDto): void;
}
