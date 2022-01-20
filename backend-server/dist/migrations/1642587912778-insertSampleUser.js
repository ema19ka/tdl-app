"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSampleUser1642587912778 = void 0;
const Category_entity_1 = require("../categories/entity/Category.entity");
const User_entity_1 = require("../users/entity/User.entity");
const typeorm_1 = require("typeorm");
class insertSampleUser1642587912778 {
    async up(queryRunner) {
        const user = new User_entity_1.User();
        user.username = 'Testuser';
        user.email = 'test@user.com';
        user.password = 'asdf1234';
        user.id = '246181b3-29d4-4ecf-84f9-aa7246c33332';
        const userRepository = (0, typeorm_1.getConnection)().getRepository(User_entity_1.User);
        await userRepository.save(user);
        const category = new Category_entity_1.Category();
        category.name = 'CategoryName';
        category.id = 'a8be0883-95db-4711-8cfc-c9b865fc8957';
        category.user = await userRepository.findOne(user.id);
        const category2 = new Category_entity_1.Category();
        category2.name = 'CategoryName2';
        category2.id = '027e9313-e42d-4386-9e8d-de7515f05125';
        category2.user = await userRepository.findOne(user.id);
        const categoryRepository = (0, typeorm_1.getConnection)().getRepository(Category_entity_1.Category);
        categoryRepository.save(category);
        categoryRepository.save(category2);
    }
    async down(queryRunner) { }
}
exports.insertSampleUser1642587912778 = insertSampleUser1642587912778;
//# sourceMappingURL=1642587912778-insertSampleUser.js.map