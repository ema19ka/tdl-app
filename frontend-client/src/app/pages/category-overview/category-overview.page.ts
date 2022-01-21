import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-overview',
  templateUrl: './category-overview.page.html',
  styleUrls: ['./category-overview.page.scss'],
})
export class CategoryOverviewPage implements OnInit {
  categoryData: any;

  constructor(public categoryService: CategoryService) {
    this.categoryData = [];
  }

  ngOnInit() {
    // this.reload();
    console.log(this.categoryService.currentCategory.catName);
    this.categoryService.getCategory().subscribe(response => {
      console.log(response);
      this.categoryData = response;
    });
  }
}
