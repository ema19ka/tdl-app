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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const List_entity_1 = require("../lists/entity/List.entity");
const typeorm_2 = require("typeorm");
const Item_entity_1 = require("./entity/Item.entity");
let ItemsService = class ItemsService {
    constructor(itemRepository, listRepository) {
        this.itemRepository = itemRepository;
        this.listRepository = listRepository;
    }
    async createItem(createDto) {
        const list = await this.listRepository.findOne(createDto.list);
        const item = this.itemRepository.create({
            name: createDto.name,
            list: list,
            isDone: createDto.isDone,
        });
        return this.itemRepository.save(item);
    }
    async updateItem(createDto) {
        const item = await this.itemRepository.findOne(createDto.id);
        item.isDone = createDto.isDone;
        item.name = createDto.name;
        item.id = createDto.id;
        return await this.itemRepository.save(item);
    }
    async deleteItem(item) {
        return await this.itemRepository.delete(item);
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Item_entity_1.Item)),
    __param(1, (0, typeorm_1.InjectRepository)(List_entity_1.List)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map