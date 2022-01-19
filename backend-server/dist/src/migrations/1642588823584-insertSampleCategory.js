"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSampleCategory1642588823584 = void 0;
const Category_entity_1 = require("../categories/entity/Category.entity");
const User_entity_1 = require("../users/entity/User.entity");
const typeorm_1 = require("typeorm");
class insertSampleCategory1642588823584 {
    async up(queryRunner) {
        const category = new Category_entity_1.Category();
        category.name = 'CategoryName';
        category.id = 'a8be0883-95db-4711-8cfc-c9b865fc8957';
        const categoryRepository = (0, typeorm_1.getConnection)().getRepository(Category_entity_1.Category);
        categoryRepository.save(category);
        const user = new User_entity_1.User();
        user.username = 'Testuser';
        user.email = 'test@user.com';
        user.password = 'asdf1234';
        user.id = '246181b3-29d4-4ecf-84f9-aa7246c33332';
        const userRepository = (0, typeorm_1.getConnection)().getRepository(User_entity_1.User);
        userRepository.save(user);
    }
    async down(queryRunner) { }
}
exports.insertSampleCategory1642588823584 = insertSampleCategory1642588823584;
//# sourceMappingURL=1642588823584-insertSampleCategory.js.map