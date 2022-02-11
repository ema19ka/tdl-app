import { Injectable } from '@angular/core';
import axios from 'axios';

const LIST_API = 'http://localhost:3000/';

const instance = axios.create({
  withCredentials: true,
  baseURL: LIST_API,
});

@Injectable({
  providedIn: 'root'
})
export class ListService {

  add(name: string, category: string) {
    console.log(name);
    return instance.post('lists/create', { name, category });
  }

  getList(id: string) {
    return instance.get(`categories/lists/${id}`);
  }

  addItem(name: string, list: string) {
    return instance.post('items/create', { name, list });
  }

  getItems(listId: string) {
    return instance.get(`lists/items/${listId}`);
  }
}
