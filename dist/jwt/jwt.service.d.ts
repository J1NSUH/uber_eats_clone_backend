import { JwtModuleOptions } from './jwt.interfaces';
import * as jwt from 'jsonwebtoken';
export declare class JwtService {
    private readonly options;
    constructor(options: JwtModuleOptions);
    sign(userId: number): string;
    verify(token: string): string | jwt.JwtPayload;
}
