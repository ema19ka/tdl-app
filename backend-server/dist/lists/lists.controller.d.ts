import { List } from './entity/List.entity';
import { ListsService } from './lists.service';
export declare class ListsController {
    private readonly listServices;
    constructor(listServices: ListsService);
    addList(list: List): Promise<List>;
    dummyGetAllLists(): Promise<List[]>;
}
