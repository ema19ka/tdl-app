import { AddItemDto } from './dtos/AddItem.dto';
import { Item } from './entity/Item.entity';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemServices;
    constructor(itemServices: ItemsService);
    createItem(createDto: AddItemDto): Promise<any>;
    updateItem(createDto: AddItemDto): Promise<any>;
    deleteItem(item: Item): Promise<Item>;
}
