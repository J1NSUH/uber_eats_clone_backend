import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
export declare class RestaurantResolver {
    restaurants(veganOlny: boolean): Restaurant[];
    createRestaurant(CreateRestaurantDto: CreateRestaurantDto): boolean;
}
