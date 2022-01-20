import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';
import { CategoryQueryDto } from './dtos/CategoryQuery.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    addCategory(category: Category): Promise<Category>;
    showCategories(param: CategoryQueryDto): Promise<Category[]>;
    dummyGetAllCat(): Promise<Category[]>;
}
