import { Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => Restaurant)
  myRestaurant() {
    return true;
  }
  /*
    @Query(returns=>Boolean)
    isPizzaGood():Boolean{
        return true;*/
}
