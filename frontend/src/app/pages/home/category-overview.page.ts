import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Category } from 'src/app/services/Category';
import { CategoryService } from 'src/app/services/category.service';
import { ListService } from 'src/app/services/list.service';
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
    private router: Router,
    public listService: ListService
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

    // console.log(userId);
    this.categoryService.getCategory(userId);
    // .then(() => {
      // this.responseArray.push(response.data);
      // // console.log(this.responseArray);
      // this.responseArray[0].category.forEach((element) => {
      //   this.categoryData.push({
      //     name: element.name,
      //     id: element.id,
      //     lists: element.lists,
      //     color: element.color,
      //   });
      // });
      // console.log(response.data.category[0].color);
      // console.log(this.respon);
      // console.log(this.categoryData);
      // console.log(this.categoryService.ApiResult);
      // this.categoryService.ApiResult.category.forEach((element) => {
      //   this.categoryData.push({
      //     name: element.name,
      //     id: element.id,
      //     lists: element.lists,
      //     color: element.color,
      //   });
      // });
      // console.log(this.categoryService.ApiResult.category);

  
    // });
  }

  currentCategory(id) {
    // console.log(id);
    localStorage.setItem('category', id);
  }

  deleteCategory(id) {
    this.categoryService
      .deleteCategory(id)
      .then(() => window.location.reload());
  }

  currentList(id, cat) {
    // console.log(id);
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
