import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { List } from './entity/List.entity';
import { ListsService } from './lists.service';

@ApiTags('Lists Controller')
@Controller('lists')
export class ListsController {
  constructor(private readonly listServices: ListsService) {}

  @ApiOperation({ summary: 'Add a list' })
  @Post('/add')
  async addList(@Body(ValidationPipe) list: List): Promise<List> {
    return this.listServices.addList(list);
  }

  @Get('/overview')
  // @HttpCode(501)
  public dummyGetAllLists(): Promise<List[]> {
    return this.listServices.dummyGetAllLists();
  }
}
