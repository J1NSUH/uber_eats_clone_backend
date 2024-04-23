import { ArgsType, Field, InputType } from '@nestjs/graphql';

//@InputType()
@ArgsType()
export class CreateRestaurantDto {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean)
  isVegan: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  ownversName: string;
}
