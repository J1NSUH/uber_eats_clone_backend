import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
export declare class RestaurantService {
    private readonly restaurant;
    constructor(restaurant: Repository<Restaurant>);
    getAll(): Promise<Restaurant[]>;
}
