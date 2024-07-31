import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    restaurants(): Promise<Restaurant[]>;
    createRestaurant(CreateRestaurantDto: CreateRestaurantDto): Promise<boolean>;
    updateRestarant(UpdateRestaurantDto: UpdateRestaurantDto): Promise<boolean>;
}
