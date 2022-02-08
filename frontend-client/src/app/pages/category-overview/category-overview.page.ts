import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.page.html',
  styleUrls: ['./category-overview.page.scss'],
})
export class CategoryOverviewPage implements OnInit {
  categoryData: any[];
  responseArray: any[];

  constructor(public categoryService: CategoryService) {
    this.categoryData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    this.categoryService.getCategory().then(response => {
      console.log(response);
      this.responseArray.push(response.data);
      console.log(this.responseArray);

      this.responseArray[0].forEach(element => {
        this.categoryData.push(element.name);
      });

      console.log(this.categoryData);
    });
  }
}
