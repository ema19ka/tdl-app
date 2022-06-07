import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  check: boolean;
  constructor() {}

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

}
