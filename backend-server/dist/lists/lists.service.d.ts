import { Repository } from 'typeorm';
import { List } from './entity/List.entity';
export declare class ListsService {
    private listRepository;
    constructor(listRepository: Repository<List>);
    addList(list: List): Promise<List>;
}
