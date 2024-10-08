import { UsersService } from './users.service';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    hi(): boolean;
    createAccount(CreateAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
    me(context: any): any;
}
