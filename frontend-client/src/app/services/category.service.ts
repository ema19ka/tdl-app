import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './Category';
import axios from 'axios';


const CATEGORY_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json'})
};

const instance = axios.create({
  withCredentials: true,
  baseURL: CATEGORY_API,
});

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // public currentCategory: Category = [
  //   catName: 'test',
  // ];

  constructor(private http: HttpClient) { }

  add(name: string, user: string) {
    console.log(name);
    return instance.post('categories/test', { name, user });
  }

  getCategory(id: string) {
    return instance.get(`users/categories/${id}`);
  }


}
