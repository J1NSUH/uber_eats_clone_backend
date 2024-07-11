import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length, isString } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
//@ArgsType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType, //여기에 inputype을 넣거나 or @InputType({ isAbstract: true }) (restaurant.entity.ts) 을 넣거나 선택
) {
  // @Field((type) => String)
  // @IsString()
  // @Length(5,10)
  // name: string;
  // @Field((type) => Boolean)
  // @IsBoolean()
  // isVegan: boolean;
  // @Field((type) => String)
  // @IsString()
  // address: string;
  // @Field((type) => String)
  // @IsString()
  // ownversName: string;
}
