import { CoreEntity } from 'src/common/entities/core.entity';
type UserRole = 'client' | 'owner' | 'delivery';
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
}
export {};
