import { CategoriesService } from './categories.service';
import { Category } from './entity/Category.entity';
import { AddCategoryDto } from './dtos/AddCategory.dto';
import RequestWithUser from 'src/auth/requestWithUser.interface';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    addCategory(category: Category): Promise<Category>;
    createCategory(category: AddCategoryDto, req: RequestWithUser): Promise<Category>;
}
