import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './entity/List.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  public async addList(list: List): Promise<List> {
    console.log(list);
    // const user = await
    return await this.listRepository.save(list);
  }

  public async dummyGetAllLists(): Promise<List[]> {
    return await this.listRepository.find();
  }
}
