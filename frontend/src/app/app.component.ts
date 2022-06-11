import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  check: boolean;
  constructor (public userService: AuthService, private router: Router) {
   }

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.check = true;
    if (this.check.toString() === localStorage.getItem('isLoggedIn')) { 
      return true;
    }
    else {
      this.check = false;
      return false;
    }
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('category');
    localStorage.removeItem('list');
    this.userService.logout();
    this.router.navigate(['/login']).then(() => window.location.reload());;
  }

}
