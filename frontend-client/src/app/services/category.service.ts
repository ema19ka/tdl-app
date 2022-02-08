import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './Category';
import axios from 'axios';


const CATEGORY_API = 'http://localhost:3000/categories/';

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

  add(name: string) {
    console.log(name);
    return instance.post('add', { name });
  }

  getCategory() {
    return instance.get<Category>('overview');
  }


}
