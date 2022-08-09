import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Category } from './Category';
import { Item } from './Item';
import { List } from './List';


// const CATEGORY_API = 'http://localhost:3000/';
// const CATEGORY_API = 'http://10.0.0.52:3000';

const instance = axios.create({
  withCredentials: true,
  baseURL: environment.baseUrl,
});

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public itemsData: Item = {
    id: '0',
    name: 'Item',
    isDone: false
  }

  public listData: List = {
    id: '0',
    name: 'List',
    isDone: false,
    items: this.itemsData[0]
  }

  public catData: Category = {
    id: '1',
    name: 'Category',
    color: 'var(--ion-color-yellow)',
    lists: this.listData[0]
  }



  addCategory(name: string, color: string, user: string) {
    return instance.post('categories/create', { name, color, user });
  }

  getCategory(id: string) {
    return instance.get(`users/categories/${id}`);
  }

  deleteCategory(id: string) {
    return instance.delete('categories/delete', {data: { id }});
  }

  addList(name: string, isDone: boolean, category: string) {
    // console.log(name);
    return instance.post('lists/create', { name, isDone, category });
  }

  getList(id: string) {
    return instance.get(`categories/lists/${id}`);
  }

  updateList(id: string, name: string, isDone: boolean, category: string) {
    // console.log(id, name, isDone, category);
    return instance.patch('lists/update', { id, name, isDone, category });
  }

  deleteList(id: string) {
    return instance.delete('lists/delete', {data: { id }});
  }

  addItem(i: Item) {
    this.listData.items.push(i)
    return instance.post('items/create', { i });
  }

  getItems(listId: string) {
    return instance.get(`lists/items/${listId}`);
  }

  updateItem(id: string, name: string, isDone: boolean, list: string) {
    // console.log(id, name, isDone, list);
    return instance.patch('items/update', { id, name, isDone, list });
  }

  deleteItem(id: string) {
    return instance.delete('items/delete', {data: { id }});
  }


}
