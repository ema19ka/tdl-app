import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Category } from 'src/app/services/Category';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/services/User';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.page.html',
  styleUrls: ['./category-overview.page.scss'],
})
export class CategoryOverviewPage implements OnInit {
  categoryData: Category[];
  responseArray: User[];

  // eslint-disable-next-line max-len
  constructor(
    public dataService: DataService,
    public userService: AuthService,
    private router: Router
  ) {
    this.categoryData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    this.getCategory();
  }

  ionViewDidEnter(){
    this.getCategory();
  }

  getCategory() {
    const userId = localStorage.getItem('user');
    this.dataService.getCategory(userId);
  }

  currentCategory(id) {
    localStorage.setItem('category', id);
  }

  deleteCategory(id) {
    this.dataService.deleteCategory(id);
  }

  currentList(id, cat) {
    localStorage.setItem('category', cat);
    localStorage.setItem('list', id);
  }

  updateItem(id, name, isDone) {
    this.dataService.updateItem(id, name, isDone);
  }

  deleteItem(id) {
    this.dataService.deleteItem(id).then(() => this.getCategory());
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('category');
    localStorage.removeItem('list');
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
