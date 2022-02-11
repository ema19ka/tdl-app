"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const Category_entity_1 = require("../categories/entity/Category.entity");
const List_entity_1 = require("./entity/List.entity");
const lists_controller_1 = require("./lists.controller");
const lists_service_1 = require("./lists.service");
let ListsModule = class ListsModule {
};
ListsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([List_entity_1.List, Category_entity_1.Category]),
            jwt_1.JwtModule.register({
                secret: '12341234',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
        ],
        controllers: [lists_controller_1.ListsController],
        providers: [lists_service_1.ListsService],
    })
], ListsModule);
exports.ListsModule = ListsModule;
//# sourceMappingURL=lists.module.js.map