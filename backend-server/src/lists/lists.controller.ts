import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ListsService } from './lists.service';
import { AddListDto } from './dtos/AddList.dto';
import { List } from './entity/List.entity';

@ApiTags('Lists Controller')
@Controller('lists')
export class ListsController {
  constructor(private readonly listServices: ListsService) {}

  @ApiOperation({ summary: 'Add a list' })
  @UseGuards(AuthGuard)
  @Post('/create')
  async createList(@Body(ValidationPipe) createDto: AddListDto): Promise<any> {
    return this.listServices.createList(createDto);
  }

  // get all items from list
  @UseGuards(AuthGuard)
  @Get('/items/:id')
  getCategories(@Param() params: AddListDto): Promise<List> {
    return this.listServices.getItemFromList(params.id);
  }

  @ApiOperation({ summary: 'Update a list' })
  @UseGuards(AuthGuard)
  @Patch('/update')
  async updateList(@Body(ValidationPipe) createDto: AddListDto): Promise<any> {
    return this.listServices.updateList(createDto);
  }

  // delete
  @ApiOperation({ summary: 'Delete list' })
  @UseGuards(AuthGuard)
  @Delete('/delete')
  async deleteList(@Body(ValidationPipe) list: List): Promise<List> {
    return this.listServices.deleteList(list);
  }
}
