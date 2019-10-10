import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  //   private readonly items: Item[] = [
  //     {
  //       id: '345689745',s
  //       name: 'Item One',
  //       qty: 100,
  //       description: 'This is Item one',
  //     },

  //     {
  //       id: '3456845687',
  //       name: 'Item Two',
  //       qty: 50,
  //       description: 'This is Item two',
  //     },
  //   ];
  //   findAll(): Item[] {
  //     return this.items;
  //   }
  //   findOne(id: string): Item {
  //     return this.items.find(item => item.id === id);
  //   }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findOneAndDelete();
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}

export default ItemsService;
