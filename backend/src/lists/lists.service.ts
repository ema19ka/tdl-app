import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/entity/Category.entity';
import { Repository } from 'typeorm';
import { AddListDto } from './dtos/AddList.dto';
import { List } from './entity/List.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async createList(createDto: AddListDto): Promise<any> {
    const category = await this.categoryRepository.findOne(createDto.category);
    const list = this.listRepository.create({
      name: createDto.name,
      category: category,
      isDone: createDto.isDone,
    });
    return this.listRepository.save(list);
  }

  public async getItemFromList(listId: string): Promise<List> {
    return await this.listRepository.findOne(listId);
  }

  async updateList(createDto: AddListDto): Promise<any> {
    const list = await this.listRepository.findOne(createDto.id);
    list.isDone = createDto.isDone;
    list.name = createDto.name;
    return await this.listRepository.save(list);
  }

  async deleteList(list: List): Promise<any> {
    return await this.listRepository.delete(list);
  }
}
