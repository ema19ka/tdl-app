import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Category } from './Category';
import { Item } from './Item';
import { List } from './List';
import { User } from './User';

const instance = axios.create({
  withCredentials: true,
  baseURL: environment.baseUrl,
});

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  //isLoggedIn: boolean;

  public itemsData: Item = {
    id: '0',
    name: 'Item',
    isDone: false,
  };

  public listData: List = {
    id: '0',
    name: 'List',
    isDone: false,
    items: this.itemsData[0],
  };

  public catData: Category = {
    id: '1',
    name: 'Category',
    color: 'var(--ion-color-yellow)',
    lists: this.listData[0],
  };

  public ApiResult: User = {
    id: '',
    username: '',
    email: '',
    password: '',
    category: this.catData[0],
  };


  // Categories
  getCategory(id: string) {
    return instance.get<User>(`users/categories/${id}`)
    .then((response) => {
      this.ApiResult = response.data;
    });
  }

  addCategory(id: string, name: string, color: string, user: string) {
    return instance.post<Category>('categories/create', { id, name, color, user }).then(() => {
      this.getCategory(this.ApiResult.id);
    });
  
  }

  //update
  
  deleteCategory(id: string) {
    return instance.delete('categories/delete', { data: { id } }).then( () => {
      this.getCategory(this.ApiResult.id)
    });
  }



  // Lists
  getList(id: string) {
    return instance.get<Category>(`categories/lists/${id}`)
    .then((response) => {
      this.catData = response.data;
    });
  }

  addList(id: string, name: string, isDone: boolean, category: string) {
    return instance.post<List>('lists/create', { id, name, isDone, category }).then(() => {
      this.getList(this.catData.id);
    });
  }

  updateList(id: string, name: string, isDone: boolean, category: string) {
    return instance.patch('lists/update', { id, name, isDone, category }).then(() => {
      this.getList(this.catData.id);
    });
  }

  deleteList(id: string) {
    return instance.delete('lists/delete', { data: { id } }).then( () => {
      this.getList(this.catData.id);
    });
  }


  
  // Items
  getItems(listId: string) {
    return instance.get<List>(`lists/items/${listId}`)
    .then((response) => {
      this.listData = response.data;
    });
  }

  addItem(id: string, name: string, isDone: boolean, list: string) {
    return instance.post<Item>('items/create', { id, name, isDone, list }).then(() => {
      this.getItems(this.listData.id);
    });
  }

  updateItem(id: string, name: string, isDone: boolean) {
    return instance.patch('items/update', { id, name, isDone }).then(() => {
      this.getItems(this.listData.id);
    });
  }

  deleteItem(id: string) {
    return instance.delete('items/delete', { data: { id } }).then( () => {
      this.getItems(localStorage.getItem('list'));
    });
  }
}
