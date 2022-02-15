import { List } from 'src/lists/entity/List.entity';
import { User } from 'src/users/entity/User.entity';
export declare class Category {
    id: string;
    name: string;
    color: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    version: number;
    user: User;
    lists: List[];
}
