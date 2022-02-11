import { Category } from 'src/categories/entity/Category.entity';
import { Repository } from 'typeorm';
import { AddListDto } from './dtos/AddList.dto';
import { List } from './entity/List.entity';
export declare class ListsService {
    private listRepository;
    private categoryRepository;
    constructor(listRepository: Repository<List>, categoryRepository: Repository<Category>);
    createList(createDto: AddListDto): Promise<any>;
}
