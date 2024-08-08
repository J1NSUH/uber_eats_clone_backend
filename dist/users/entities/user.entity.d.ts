import { CoreEntity } from 'src/common/entities/core.entity';
declare enum UserRole {
    Owner = 0,
    Client = 1,
    Delivery = 2
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
}
export {};
