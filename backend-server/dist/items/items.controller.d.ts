import { AddItemDto } from './dtos/AddItem.dto';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemServices;
    constructor(itemServices: ItemsService);
    createItem(createDto: AddItemDto): Promise<any>;
}
