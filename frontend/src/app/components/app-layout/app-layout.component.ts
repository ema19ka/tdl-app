import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {

  check: boolean;
  constructor (public userService: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('category');
    localStorage.removeItem('list');
    localStorage.setItem('isLoggedIn', 'false');
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
