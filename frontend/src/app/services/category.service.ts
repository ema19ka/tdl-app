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
export class CategoryService {
  constructor() {}

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

  /*
  getUser(user: User) {
    return instance.get(`users/categories/${user.id}`);
  }
  */

  addCategory(id: string, name: string, color: string, user: string) {
    return instance.post<Category>('categories/create', { id, name, color, user });
  }

  getCategory(id: string) {
    return instance.get<User>(`users/categories/${id}`)
    .then((response) => {
      this.ApiResult = response.data;
      console.log(this.ApiResult.category);
    });
  }

  deleteCategory(id: string) {
    return instance.delete('categories/delete', { data: { id } }).then( () => {
      this.getCategory(this.ApiResult.id)
    });
  }

  addList(id: string, name: string, isDone: boolean, category: string) {
    return instance.post<List>('lists/create', { id, name, isDone, category });
  }

  getList(id: string) {
    return instance.get<Category>(`categories/lists/${id}`)
    .then((response) => {
      this.catData = response.data;
    });
  }

  updateList(id: string, name: string, isDone: boolean, category: string) {
    return instance.patch('lists/update', { id, name, isDone, category });
  }

  deleteList(id: string) {
    return instance.delete('lists/delete', { data: { id } }).then( () => {
      this.getList(localStorage.getItem('category'));
    });
  }

  addItem(id: string, name: string, isDone: boolean, list: string) {
    return instance.post<Item>('items/create', { id, name, isDone, list });
  }

  getItems(listId: string) {
    return instance.get<List>(`lists/items/${listId}`)
    .then((response) => {
      this.listData = response.data;
    });
  }

  updateItem(id: string, name: string, isDone: boolean, list: string) {
    return instance.patch('items/update', { id, name, isDone, list });
  }

  deleteItem(id: string) {
    return instance.delete('items/delete', { data: { id } }).then( () => {
      this.getItems(localStorage.getItem('list'));
    });
  }
}
