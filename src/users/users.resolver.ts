import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import {
  CreateAccountInput,
  CreateAccoutOutput,
} from './dtos/create-account.dto';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccoutOutput)
  createAccount(@Args('input') CreateAccountInput: CreateAccountInput) {}
}
