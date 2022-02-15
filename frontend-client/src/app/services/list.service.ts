import { Injectable } from '@angular/core';
import axios from 'axios';
import { Item } from './Item';

const LIST_API = 'http://localhost:3000/';

const instance = axios.create({
  withCredentials: true,
  baseURL: LIST_API,
});

@Injectable({
  providedIn: 'root'
})
export class ListService {

  add(name: string, isDone: boolean, category: string) {
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

  addItem(name: string, isDone: boolean, list: string) {
    return instance.post('items/create', { name, isDone, list });
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
