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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const class_validator_1 = require("class-validator");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Owner"] = 0] = "Owner";
    UserRole[UserRole["Client"] = 1] = "Client";
    UserRole[UserRole["Delivery"] = 2] = "Delivery";
})(UserRole || (UserRole = {}));
(0, graphql_1.registerEnumType)(UserRole, { name: 'UserRole' });
let User = class User extends core_entity_1.CoreEntity {
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserRole }),
    (0, graphql_1.Field)((type) => UserRole),
    (0, class_validator_1.IsEnum)(UserRole),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
exports.User = User = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map