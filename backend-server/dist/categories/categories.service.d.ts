import { Repository } from 'typeorm';
import { Category } from './entity/Category.entity';
export declare class CategoriesService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    addCategory(category: Category): Promise<Category>;
    testGetAllCat(): Promise<Category[]>;
    showAllCategoriesByUserId(userid: string): Promise<Category[]>;
}
