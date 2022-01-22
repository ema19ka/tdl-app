import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
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
}
