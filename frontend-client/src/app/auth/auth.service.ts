import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

const API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json' })
};

const instance = axios.create({
  withCredentials: true,
  baseURL: API
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = 'false';

  redirectUrl: string | null = null;

  constructor(private http: HttpClient) { }

  async login(username: string, email: string, password: string) {
    this.isLoggedIn = 'true';
    localStorage.setItem('isLoggedIn', this.isLoggedIn);
    // console.log(username,password,email);
    return await instance.post('auth/login', {
      username,
      email,
      password
    });
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(API + 'users/register', {
      username,
      email,
      password,
      withCredentials: true
    }, httpOptions);
  }

  async test() {
    return await instance.get('users/all');
  }

  async logout() {
    this.isLoggedIn = 'false';
    localStorage.setItem('isLoggedIn', this.isLoggedIn);
    return await instance.get('auth/logout');
  }
}
