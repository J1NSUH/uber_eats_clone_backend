import { User } from '../entities/user.entity';
import { MutationOutput } from 'src/common/dtos/output.dto';
declare const CreateAccountInput_base: import("@nestjs/common").Type<Pick<User, "email" | "password" | "role">>;
export declare class CreateAccountInput extends CreateAccountInput_base {
}
export declare class CreateAccoutOutput extends MutationOutput {
}
export {};
