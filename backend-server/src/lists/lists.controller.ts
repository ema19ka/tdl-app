import {
  Body,
  Controller,
  Get,
  Param,
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

  // TODO: update

  // TODO: delete
}
