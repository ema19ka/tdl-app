import { Category } from 'src/categories/entity/Category.entity';
export declare class List {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    version: number;
    category: Category;
}
