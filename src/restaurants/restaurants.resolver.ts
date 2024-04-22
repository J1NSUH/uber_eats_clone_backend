import { Args, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => [Restaurant]) //"[]"는 graephql 규칙
  restaurants(@Args('veganOnly') veganOlny: boolean): Restaurant[] {
    console.log(veganOlny);
    return [];
  }
  /*myRestaurant() {
    return true;
  }//2.3*/
  /*
    @Query(returns=>Boolean)
    isPizzaGood():Boolean{
        return true;*/
}
