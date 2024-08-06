import { UsersService } from './user.service';
import { CreateAccountInput } from './dtos/create-account.dto';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    hi(): boolean;
    createAccount(CreateAccountInput: CreateAccountInput): void;
}
