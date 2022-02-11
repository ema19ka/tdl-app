"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const List_entity_1 = require("../lists/entity/List.entity");
const Item_entity_1 = require("./entity/Item.entity");
const items_controller_1 = require("./items.controller");
const items_service_1 = require("./items.service");
let ItemsModule = class ItemsModule {
};
ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Item_entity_1.Item, List_entity_1.List]),
            jwt_1.JwtModule.register({
                secret: '12341234',
                signOptions: {
                    expiresIn: '24h',
                },
            }),
        ],
        controllers: [items_controller_1.ItemsController],
        providers: [items_service_1.ItemsService],
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=items.module.js.map