import { User } from 'src/users/entity/User.entity';
import { Repository } from 'typeorm';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import { Category } from './entity/Category.entity';
export declare class CategoriesService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    addCategory(category: Category): Promise<Category>;
    createCategory(category: AddCategoryDto, userid: User): Promise<Category>;
}
