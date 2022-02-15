import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.page.html',
  styleUrls: ['./category-overview.page.scss'],
})
export class CategoryOverviewPage implements OnInit {
  categoryData: any[];
  responseArray: any[];

  constructor(public categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.categoryData = [];
    this.responseArray = [];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.getCategory();
  }

  getCategory(){
    const userId = localStorage.getItem('user');
    // console.log(userId);
    this.categoryService.getCategory(userId).then(response => {
      // console.log(response);
      this.responseArray.push(response.data);
      // console.log(this.responseArray);

      this.responseArray[0].category.forEach(element => {
        this.categoryData.push({
          name: element.name,
          id: element.id,
          lists: element.lists,
          color: element.color
        });
      });
    });
  }

  // changeColor(color) {
  //    console.log(color);
  // }

  currentCategory(id){
    // console.log(id);
    localStorage.setItem('category', id);
  }

  currentList(id){
    // console.log(id);
    localStorage.setItem('list', id);
  }
}
