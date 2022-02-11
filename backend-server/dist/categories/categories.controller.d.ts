import { CategoriesService } from './categories.service';
import { AddCategoryDto } from './dtos/AddCategory.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createDto: AddCategoryDto): Promise<any>;
}
