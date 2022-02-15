import { List } from 'src/lists/entity/List.entity';
import { Repository } from 'typeorm';
import { AddItemDto } from './dtos/AddItem.dto';
import { Item } from './entity/Item.entity';
export declare class ItemsService {
    private itemRepository;
    private listRepository;
    constructor(itemRepository: Repository<Item>, listRepository: Repository<List>);
    createItem(createDto: AddItemDto): Promise<any>;
    updateItem(createDto: AddItemDto): Promise<any>;
    deleteItem(item: Item): Promise<any>;
}
