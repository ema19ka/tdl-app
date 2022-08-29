import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Category } from 'src/app/services/Category';
import { CategoryService } from 'src/app/services/category.service';
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
    public categoryService: CategoryService,
    public userService: AuthService,
    private router: Router
  ) {
    this.categoryData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    this.getCategory();
  }

  getUserData() {}

  getCategory() {
    const userId = localStorage.getItem('user');
    this.categoryService.getCategory(userId);
  }

  currentCategory(id) {
    localStorage.setItem('category', id);
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id);
    console.log(this.categoryService.ApiResult.category);
  }

  currentList(id, cat) {
    localStorage.setItem('category', cat);
    localStorage.setItem('list', id);
  }

  updateItem(id, name, isDone, list) {
    this.categoryService.updateItem(id, name, isDone, list);
  }

  deleteItem(id) {
    this.categoryService.deleteItem(id).then(() => window.location.reload());
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('category');
    localStorage.removeItem('list');
    this.userService.logout();
    this.router.navigate(['/login']).then(() => window.location.reload());
  }
}
