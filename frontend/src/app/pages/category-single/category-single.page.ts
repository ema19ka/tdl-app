import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.page.html',
  styleUrls: ['./category-single.page.scss'],
})
export class CategorySinglePage implements OnInit {
  listData: any[];
  responseArray: any[];
  categoriesName: string;
  categoryColor: string;
  checked: boolean;

  constructor(public categoryService: CategoryService, public userService: AuthService, private router: Router, private activeRoute: ActivatedRoute) {
    this.listData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
   this.getLists();
  }

  getLists(){
    const categoryId = localStorage.getItem('category');
    this.categoryService.getList(categoryId);
  }

  currentList(id){
    localStorage.setItem('list', id);
  }

  updateList(id, name, isDone, category, index){
    this.categoryService.updateList(id, name, isDone, category);
    const currentStatus = this.listData[index].isDone;
    this.listData[index].items.forEach(element => {
      this.categoryService.updateItem(element.id, element.name, currentStatus);
    });
  }

  deleteList(id) {
    this.categoryService.deleteList(id);
  }

  updateItem(id, name, isDone){
    this.categoryService.updateItem(id, name, isDone);
  }

  deleteItem(id){
    this.categoryService.deleteItem(id).then(() => this.getLists());
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('category');
    localStorage.removeItem('list');
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
