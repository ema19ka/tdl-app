import { Injectable } from '@angular/core';
import axios from 'axios';


const CATEGORY_API = 'http://localhost:3000/';
// const CATEGORY_API = 'http://10.0.0.52:3000';

const instance = axios.create({
  withCredentials: true,
  baseURL: CATEGORY_API,
});

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  add(name: string, color: string, user: string) {
    return instance.post('categories/create', { name, color, user });
  }

  getCategory(id: string) {
    return instance.get(`users/categories/${id}`);
  }

  deleteCategory(id: string) {
    return instance.delete('categories/delete', {data: { id }});
  }


}
