import { Category } from 'src/categories/entity/Category.entity';
import { List } from 'src/lists/entity/List.entity';
import { User } from 'src/users/entity/User.entity';
import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';

export class insertSampleUser1642587912778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user = new User();
    user.username = 'User';
    user.email = 'user@user.com';
    user.salt = await user.genSalt();
    // user.password = 'asdf1234';
    user.password = await user.hashPassword('password', user.salt);
    user.id = '246181b3-29d4-4ecf-84f9-aa7246c33332';

    const user2 = new User();
    user2.username = 'User 2';
    user2.email = 'user2@user.com';
    user2.salt = await user.genSalt();
    user2.password = await user.hashPassword('asdf1234', user2.salt);
    user2.id = '6fcd6e60-b80c-41ca-ba4d-1dbe605ffc9e';

    const userRepository = getConnection().getRepository(User);
    await userRepository.save(user);
    await userRepository.save(user2);

    const category = new Category();
    category.name = 'User 1 Category 1';
    category.id = 'a8be0883-95db-4711-8cfc-c9b865fc8957';
    category.user = await userRepository.findOne(user.id);

    const category2 = new Category();
    category2.name = 'User 1 Category 2';
    category2.id = '027e9313-e42d-4386-9e8d-de7515f05125';
    category2.user = await userRepository.findOne(user.id);

    const category3 = new Category();
    category3.name = 'User 1 Category 3';
    category3.id = 'd874a5e0-febe-45dc-ab26-0055fa89e88e';
    category3.user = await userRepository.findOne(user.id);

    const category24 = new Category();
    category24.name = 'User 2 Category 1';
    category24.id = '241abfe3-085e-4393-90b2-31c4a92c9ed4';
    category24.user = await userRepository.findOne(user2.id);

    const categoryRepository = getConnection().getRepository(Category);
    categoryRepository.save(category);
    categoryRepository.save(category2);
    categoryRepository.save(category3);
    categoryRepository.save(category24);

    const list = new List();
    list.name = 'ListName';
    list.id = '241abfe3-085e-4393-90b2-31c4a92c9ed4';
    list.category = await categoryRepository.findOne(category.id);

    const listRepository = getConnection().getRepository(List);
    listRepository.save(list);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
