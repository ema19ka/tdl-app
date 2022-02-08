import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { List } from './entity/List.entity';
import { ListsService } from './lists.service';

@ApiTags('Lists Controller')
@Controller('lists')
export class ListsController {
  constructor(private readonly listServices: ListsService) {}

  // TODO: fix create
  @ApiOperation({ summary: 'Add a list' })
  @UseGuards(AuthGuard)
  @Post('/add')
  async addList(@Body(ValidationPipe) list: List): Promise<List> {
    return this.listServices.addList(list);
  }

  // TODO: fix read
  @Get('/overview')
  @UseGuards(AuthGuard)
  // @HttpCode(501)
  public dummyGetAllLists(): Promise<List[]> {
    return this.listServices.dummyGetAllLists();
  }

  // TODO: update

  // TODO: delete
}
