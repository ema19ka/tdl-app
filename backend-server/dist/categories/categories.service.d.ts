import { User } from 'src/users/entity/User.entity';
import { Repository } from 'typeorm';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import { Category } from './entity/Category.entity';
export declare class CategoriesService {
    private categoryRepository;
    private userRepository;
    constructor(categoryRepository: Repository<Category>, userRepository: Repository<User>);
    createCategory(createDto: AddCategoryDto): Promise<any>;
    getListFromCategory(categoryId: string): Promise<Category>;
}
