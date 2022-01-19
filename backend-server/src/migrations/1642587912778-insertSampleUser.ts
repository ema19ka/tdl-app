import { Category } from 'src/categories/entity/Category.entity';
import { User } from 'src/users/entity/User.entity';
import { getConnection, MigrationInterface, QueryRunner } from 'typeorm';

export class insertSampleUser1642587912778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const user = new User();
    user.username = 'Testuser';
    user.email = 'test@user.com';
    user.password = 'asdf1234';
    user.id = '246181b3-29d4-4ecf-84f9-aa7246c33332';

    const userRepository = getConnection().getRepository(User);
    await userRepository.save(user);

    const category = new Category();
    category.name = 'CategoryName';
    category.id = 'a8be0883-95db-4711-8cfc-c9b865fc8957';
    category.user = await userRepository.findOne(user.id);

    const categoryRepository = getConnection().getRepository(Category);
    categoryRepository.save(category);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
