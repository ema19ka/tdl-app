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
import { AddListDto } from './dtos/AddList.dto';

@ApiTags('Lists Controller')
@Controller('lists')
export class ListsController {
  constructor(private readonly listServices: ListsService) {}

  // TODO: fix create
  @ApiOperation({ summary: 'Add a list' })
  @UseGuards(AuthGuard)
  @Post('/create')
  async createList(@Body(ValidationPipe) createDto: AddListDto): Promise<any> {
    return this.listServices.createList(createDto);
  }

  // TODO: fix read

  // TODO: update

  // TODO: delete
}
