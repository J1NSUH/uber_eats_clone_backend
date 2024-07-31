import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { Type } from 'class-transformer';

@InputType() //@Args() 괄호안에 이름이 있어야함
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantDto,
) {}

//@ArgsType() //@Args() 괄호안에 이름이 없어야함
@InputType() //@Args() 괄호안에 이름이 있어야함
export class UpdateRestaurantDto {
  @Field((type) => Number)
  id: number;

  @Field((type) => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
