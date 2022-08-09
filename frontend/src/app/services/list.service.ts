import { Injectable } from '@angular/core';
import axios from 'axios';

const LIST_API = 'http://localhost:3000/';
// const LIST_API = 'http://10.0.0.52:3000';

const instance = axios.create({
  withCredentials: true,
  baseURL: LIST_API,
});

@Injectable({
  providedIn: 'root'
})
export class ListService {

 
}
