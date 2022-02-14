import { List } from 'src/lists/entity/List.entity';
export declare class Item {
    id: string;
    name: string;
    isDone: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    version: number;
    list: List;
}
