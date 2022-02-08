import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './List';
import axios from 'axios';

const LIST_API = 'http://localhost:3000/lists/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json'})
};

const instance = axios.create({
  withCredentials: true,
  baseURL: LIST_API,
});

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public currentList: List = {
    listName: 'ListName',
  };

  constructor(private http: HttpClient) { }

  add(name: string) {
    console.log(name);
    return instance.post('add', { name });
  }
  getList() {
    return instance.get<List>('overview');
  }
}
