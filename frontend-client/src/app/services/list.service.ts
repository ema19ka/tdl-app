import { Injectable } from '@angular/core';
import axios from 'axios';

const LIST_API = 'http://localhost:3000/lists/';

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
    return instance.post('create', { name, category });
  }
  // getList() {
  //   return instance.get<List>('overview');
  // }
}
