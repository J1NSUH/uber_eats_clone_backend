import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';
export declare class UsersService {
    private readonly users;
    constructor(users: Repository<User>);
    createAccount({ email, password, role, }: CreateAccountInput): Promise<[ok: boolean, error?: string]>;
}
