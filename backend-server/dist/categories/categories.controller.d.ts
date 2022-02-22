import { CategoriesService } from './categories.service';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import { Category } from './entity/Category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createDto: AddCategoryDto): Promise<any>;
    deleteCateogry(category: Category): Promise<Category>;
    getCategories(params: AddCategoryDto): Promise<Category>;
}
