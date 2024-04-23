import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

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
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() CreateRestaurantDto: CreateRestaurantDto): boolean {
    console.log(CreateRestaurantDto);
    return true;
  }
}
