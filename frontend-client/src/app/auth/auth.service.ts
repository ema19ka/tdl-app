import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { ToastController } from '@ionic/angular';

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

  constructor(private http: HttpClient, public toastController: ToastController) { }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  async login(username: string, email: string, password: string) {
    try {
      this.isLoggedIn = 'true';
      localStorage.setItem('isLoggedIn', this.isLoggedIn);
       return await instance.post('auth/login', {
        username,
        email,
        password
      });
    } catch(error) {
      this.isLoggedIn = 'false';
      localStorage.setItem('isLoggedIn', this.isLoggedIn);
      this.presentToast('User not found or password incorrect');
      return error;
    }
  }
  register(username: string, email: string, password: string): Observable<any> {
    try {
      return this.http.post(API + 'users/register', {
        username,
        email,
        password,
        withCredentials: true
      }, httpOptions);
    } catch (error) {
      this.presentToast('User already exists');
      return error;
    }
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
