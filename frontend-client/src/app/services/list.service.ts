import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './List';

const LIST_API = 'http://localhost:3000/lists/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public currentList: List = {
    listName: 'ListName',
  };

  constructor(private http: HttpClient) { }

  add(name: string): Observable<any> {
    console.log(name);
    return this.http.post(LIST_API + 'add', {
      name,
    }, httpOptions);
  }
  // getList(): Observable<List> {
  //   return this.http.get<List>(LIST_API + 'overview');
  // }
}
