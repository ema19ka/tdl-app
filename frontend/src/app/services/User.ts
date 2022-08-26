import { Category } from "./Category";

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    salt?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: any;
    version?: number;
    category: Category[];
}