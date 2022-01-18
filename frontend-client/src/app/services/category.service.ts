import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './Category';

const CATEGORY_API = 'http://localhost:3000/categories/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  add(name: string): Observable<any> {
    return this.http.post(CATEGORY_API + 'add', {
      name,
    }, httpOptions);
  }

  // public currentCategory: Category = {
  //   id: '1',
  //   name: 'Name',
  // };

  // constructor() {
  //   this.load();
  //  }

  //  addCategory() {
  //    Storage.set({
  //      key: 'TDL',
  //      value: JSON.stringify(this.currentCategory)
  //    });
  //    console.log('save');
  //  }
}
