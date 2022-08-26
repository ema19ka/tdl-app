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
    // console.log(categoryId);
    this.categoryService.getList(categoryId);
    // .then(response => {
      // console.log(response);
      // this.categoriesName = response.data.name;
      // this.categoryColor = response.data.color;
      // this.responseArray.push(response.data);

      // this.responseArray[0].lists.forEach((element, index) =>  {
      //   this.listData.push({
      //     name: element.name,
      //     id: element.id,
      //     isDone: element.isDone,
      //     items: element.items,
      //     category: categoryId,
      //     index
      //   });
      // });

    // });
  }

  currentList(id){
    // console.log(id);
    localStorage.setItem('list', id);
  }

  updateList(id, name, isDone, category, index){
    // console.log(id, name, isDone, category);
    this.categoryService.updateList(id, name, isDone, category);
    const currentStatus = this.listData[index].isDone;
    this.listData[index].items.forEach(element => {
      this.categoryService.updateItem(element.id, element.name, currentStatus, this.listData[index]);
    });
    // console.log(this.listData[index]);
  }

  deleteList(id) {
    this.categoryService.deleteList(id).then(() => this.router.navigate(['/home']).then(() => window.location.reload()));
  }

  updateItem(id, name, isDone, list){
    this.categoryService.updateItem(id, name, isDone, list);
  }

  deleteItem(id){
    this.categoryService.deleteItem(id).then(() => window.location.reload());
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('category');
    localStorage.removeItem('list');
    this.userService.logout();
    this.router.navigate(['/login']).then(() => window.location.reload());;
  }

}
