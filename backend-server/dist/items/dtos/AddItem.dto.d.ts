import { List } from 'src/lists/entity/List.entity';
export declare class AddItemDto {
    id: string;
    name: string;
    list: List;
    isDone: boolean;
}
