"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt = require("jsonwebtoken");
const user_entity_1 = require("./entities/user.entity");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let UsersService = class UsersService {
    constructor(users, config) {
        this.users = users;
        this.config = config;
    }
    async createAccount({ email, password, role, }) {
        try {
            const exists = await this.users.findOne({ where: { email } });
            if (exists) {
                return { ok: false, error: 'There is a user with that email already' };
            }
            await this.users.save(this.users.create({ email, password, role }));
            return { ok: true };
        }
        catch (e) {
            return { ok: false, error: "Couldn't create account" };
        }
    }
    async login({ email, password }) {
        try {
            const user = await this.users.findOne({ where: { email } });
            if (!user) {
                return {
                    ok: false,
                    error: 'User not found',
                };
            }
            const passwordCorrect = await user.checkPassword(password);
            if (!passwordCorrect) {
                return {
                    ok: false,
                    error: 'wrong password',
                };
            }
            const token = jwt.sign({ id: user.id }, this.config.get('SECRET_KEY'));
            return {
                ok: true,
                token,
            };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map