import { Category } from 'src/categories/entity/Category.entity';
export declare class User {
    id: string;
    username: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    version: number;
    category: Category[];
}
