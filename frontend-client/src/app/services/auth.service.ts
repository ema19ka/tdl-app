import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json' })
};

const instance = axios.create({
  withCredentials: true,
  baseURL: AUTH_API
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, email: string, password: string) {
    console.log(username,password,email);
    return instance.post('auth/login', {
      username,
      email,
      password
    });
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'users/register', {
      username,
      email,
      password,
      withCredentials: true
    }, httpOptions);
  }

  async test() {
    return await instance.get('users/all');
  }
}
