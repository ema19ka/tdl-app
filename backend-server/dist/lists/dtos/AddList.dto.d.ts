import { Category } from 'src/categories/entity/Category.entity';
export declare class AddListDto {
    id: string;
    name: string;
    category: Category;
    isDone: boolean;
}
