import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
//@ArgsType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  //InputType, //여기에 inputype을 넣거나 or @InputType({ isAbstract: true }) (restaurant.entity.ts) 을 넣거나 선택
) {}
