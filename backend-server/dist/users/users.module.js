"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const categories_module_1 = require("../categories/categories.module");
const Category_entity_1 = require("../categories/entity/Category.entity");
const User_entity_1 = require("./entity/User.entity");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: '12341234',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([User_entity_1.User, Category_entity_1.Category]),
            categories_module_1.CategoriesModule,
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map