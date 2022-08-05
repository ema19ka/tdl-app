import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from 'src/lists/entity/List.entity';
import { Repository } from 'typeorm';
import { AddItemDto } from './dtos/AddItem.dto';
import { Item } from './entity/Item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  async createItem(createDto: AddItemDto): Promise<Item> {
    const list = await this.listRepository.findOne(createDto.list);
    const item = this.itemRepository.create({
      name: createDto.name,
      list: list,
      isDone: createDto.isDone,
    });
    return this.itemRepository.save(item);
  }

  async updateItem(createDto: AddItemDto): Promise<Item> {
    const item = await this.itemRepository.findOne(createDto.id);
    item.isDone = createDto.isDone;
    item.name = createDto.name;
    item.id = createDto.id;
    return await this.itemRepository.save(item);
  }

  async deleteItem(item: Item): Promise<any> {
    // const item = await this.itemRepository.findOne(createDto.id);
    return await this.itemRepository.delete(item);
  }
}
