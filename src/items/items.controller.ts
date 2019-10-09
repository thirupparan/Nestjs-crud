import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  // constructor dependency injection simmilar Angular

  constructor(private readonly itemsService: ItemsService) {}
  // Get request Api create nest-js with node-js
  @Get()
  //findAll(): string {
  // return 'Hello world';
  //}-------------------
  //   findAll(): Item[] {
  //     return this.itemsService.findAll();
  //   }
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  //   findOne(@Param('id') id): string {
  //     return `Item ${id}`;
  //   }
  //   findOne(@Param('id') id): Item {
  //     return this.itemsService.findOne(id);
  //   }--------------------
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  @Post()
  //   create(@Body() createItemDto: CreateItemDto): String {
  //     return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  //   }
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  //   delete(@Param('id') id): string {
  //     return `Delete ${id}`;
  //   }
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  //   update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
  //     return `Update ${id} -Name : ${updateItemDto.name}`;
  //   }
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
}
