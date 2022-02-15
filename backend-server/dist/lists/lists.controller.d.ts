import { ListsService } from './lists.service';
import { AddListDto } from './dtos/AddList.dto';
import { List } from './entity/List.entity';
export declare class ListsController {
    private readonly listServices;
    constructor(listServices: ListsService);
    createList(createDto: AddListDto): Promise<any>;
    getCategories(params: AddListDto): Promise<List>;
    updateList(createDto: AddListDto): Promise<any>;
    deleteList(list: List): Promise<List>;
}
