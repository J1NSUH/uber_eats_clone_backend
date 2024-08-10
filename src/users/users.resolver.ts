import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import {
  CreateAccountInput,
  CreateAccoutOutput,
} from './dtos/create-account.dto';
import { boolean, string } from 'joi';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => Boolean)
  hi() {
    return true;
  }

  @Mutation((returns) => CreateAccoutOutput)
  async createAccount(
    @Args('input') CreateAccountInput: CreateAccountInput,
  ): Promise<CreateAccoutOutput> {
    try {
      const error = await this.usersService.createAccount(CreateAccountInput);
      if (error) {
        return {
          ok: false,
          error,
        };
      }
      return {
        ok: true,
      };
    } catch (error) {
      return {
        error: error,
        ok: false,
      };
    }
  }
}
