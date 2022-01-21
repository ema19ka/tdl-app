import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './Category';

const CATEGORY_API = 'http://localhost:3000/categories/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public currentCategory: Category = {
    catName: 'test',
  };


  constructor(private http: HttpClient) { }

  add(name: string): Observable<any> {
    console.log(name);
    return this.http.post(CATEGORY_API + 'add', {
      name,
    }, httpOptions);
  }

  getCategory(): Observable<Category> {
    return this.http.get<Category>(CATEGORY_API + 'overview');
  }


}
