import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public userService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userService.test();
  }

  onLogout() {
    console.log('test');
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
