import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/';

const httpOptions = {
  headers: new HttpHeaders({ contentType: 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, email: string, password: string): Observable<any> {
    console.log(username,password,email);
    return this.http.post(AUTH_API + 'auth/login', {
      username,
      email,
      password,
      withCredentials: true
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'users/register', {
      username,
      email,
      password
    }, httpOptions);
  }

  test(): Observable<any> {
    return this.http.get(AUTH_API + 'users/all',{
      withCredentials: true
    });
  }
}
