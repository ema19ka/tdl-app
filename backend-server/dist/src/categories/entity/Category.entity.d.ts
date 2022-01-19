import { User } from 'src/users/entity/User.entity';
export declare class Category {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    version: number;
    user: User;
}
