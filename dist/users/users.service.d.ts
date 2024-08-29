import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { MutationOutput } from 'src/common/dtos/output.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from 'src/jwt/jwt.service';
export declare class UsersService {
    private readonly users;
    private readonly config;
    private readonly jwtService;
    constructor(users: Repository<User>, config: ConfigService, jwtService: JwtService);
    createAccount({ email, password, role, }: CreateAccountInput): Promise<MutationOutput>;
    login({ email, password }: LoginInput): Promise<LoginOutput>;
}
