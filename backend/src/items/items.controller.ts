import {
  Body,
  Controller,
  Delete,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { AddItemDto } from './dtos/AddItem.dto';
import { Item } from './entity/Item.entity';
import { ItemsService } from './items.service';

@ApiTags('Items Controller')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemServices: ItemsService) {}

  @ApiOperation({ summary: 'Add an item to a list' })
  @UseGuards(AuthGuard)
  @Post('/create')
  async createItem(@Body(ValidationPipe) createDto: AddItemDto): Promise<Item> {
    return this.itemServices.createItem(createDto);
  }

  @ApiOperation({ summary: 'Update an item' })
  @UseGuards(AuthGuard)
  @Patch('/update')
  async updateItem(@Body(ValidationPipe) createDto: AddItemDto): Promise<Item> {
    return this.itemServices.updateItem(createDto);
  }

  @ApiOperation({ summary: 'Delete an item' })
  @UseGuards(AuthGuard)
  @Delete('/delete')
  async deleteItem(@Body(ValidationPipe) item: Item): Promise<Item> {
    return this.itemServices.deleteItem(item);
  }
}
