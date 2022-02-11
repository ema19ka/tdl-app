import { ListsService } from './lists.service';
import { AddListDto } from './dtos/AddList.dto';
export declare class ListsController {
    private readonly listServices;
    constructor(listServices: ListsService);
    createList(createDto: AddListDto): Promise<any>;
}
