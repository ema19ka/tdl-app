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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const categories_service_1 = require("./categories.service");
const Category_entity_1 = require("./entity/Category.entity");
const CategoryQuery_dto_1 = require("./dtos/CategoryQuery.dto");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async addCategory(category) {
        return this.categoriesService.addCategory(category);
    }
    async showCategories(param) {
        console.log(param.userid);
        return this.categoriesService.showAllCategoriesByUserId(param.userid);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add a Category' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Category_entity_1.Category]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Display the users Category' }),
    (0, common_1.Get)('/overview/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CategoryQuery_dto_1.CategoryQueryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "showCategories", null);
CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('Categories Controller'),
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map