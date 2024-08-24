import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { ConfigService } from '@nestjs/config';
export declare class UsersService {
    private readonly users;
    private readonly config;
    constructor(users: Repository<User>, config: ConfigService);
    createAccount({ email, password, role, }: CreateAccountInput): Promise<MutationOutput>;
    login({ email, password }: LoginInput): Promise<LoginOutput>;
}
