import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.page.html',
  styleUrls: ['./category-single.page.scss'],
})
export class CategorySinglePage implements OnInit {
  listData: any[];
  responseArray: any[];
  categoriesName: string;

  constructor(public listService: ListService) { 
    this.listData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    const categoryId = localStorage.getItem('category');
    console.log(categoryId);
    this.listService.getList(categoryId).then(response => {
      console.log(response);
      this.categoriesName = response.data.name;
      this.responseArray.push(response.data);
      console.log(this.responseArray);

      this.responseArray[0].lists.forEach(element => {
        this.listData.push({
          name: element.name,
          id: element.id
        });
      });

      console.log(this.listData);
    });
  }

}
