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
        const user2 = new User_entity_1.User();
        user2.username = 'User 2';
        user2.email = 'user2@user.com';
        user2.password = 'asdf1234';
        user2.id = '6fcd6e60-b80c-41ca-ba4d-1dbe605ffc9e';
        const userRepository = (0, typeorm_1.getConnection)().getRepository(User_entity_1.User);
        await userRepository.save(user);
        await userRepository.save(user2);
        const category = new Category_entity_1.Category();
        category.name = 'CategoryName';
        category.id = 'a8be0883-95db-4711-8cfc-c9b865fc8957';
        category.user = await userRepository.findOne(user.id);
        const category2 = new Category_entity_1.Category();
        category2.name = 'CategoryName2';
        category2.id = '027e9313-e42d-4386-9e8d-de7515f05125';
        category2.user = await userRepository.findOne(user2.id);
        const category3 = new Category_entity_1.Category();
        category3.name = 'CategoryNameNew';
        category3.id = 'd874a5e0-febe-45dc-ab26-0055fa89e88e';
        category3.user = await userRepository.findOne(user2.id);
        const category24 = new Category_entity_1.Category();
        category24.name = 'CategoryNameNew2';
        category24.id = '241abfe3-085e-4393-90b2-31c4a92c9ed4';
        category24.user = await userRepository.findOne(user2.id);
        const categoryRepository = (0, typeorm_1.getConnection)().getRepository(Category_entity_1.Category);
        categoryRepository.save(category);
        categoryRepository.save(category2);
        categoryRepository.save(category3);
        categoryRepository.save(category24);
    }
    async down(queryRunner) { }
}
exports.insertSampleUser1642587912778 = insertSampleUser1642587912778;
//# sourceMappingURL=1642587912778-insertSampleUser.js.map