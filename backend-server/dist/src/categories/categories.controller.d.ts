import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    addCategory(category: Category): Promise<Category>;
}
