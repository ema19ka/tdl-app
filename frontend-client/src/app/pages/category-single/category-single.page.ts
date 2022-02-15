import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  categoryColor: string;
  checked: boolean;

  constructor(public listService: ListService, private route: ActivatedRoute, private router: Router) {
    this.listData = [];
    this.responseArray = [];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
   this.getLists();
  }

  getLists(){
    const categoryId = localStorage.getItem('category');
    // console.log(categoryId);
    this.listService.getList(categoryId).then(response => {
      // console.log(response);
      this.categoriesName = response.data.name;
      this.categoryColor = response.data.color;
      this.responseArray.push(response.data);

      this.responseArray[0].lists.forEach((element, index) =>  {
        this.listData.push({
          name: element.name,
          id: element.id,
          isDone: element.isDone,
          items: element.items,
          category: categoryId,
          index
        });
      });

    });
  }

  currentList(id){
    // console.log(id);
    localStorage.setItem('list', id);
  }

  updateList(id, name, isDone, category, index){
    // console.log(id, name, isDone, category);
    this.listService.updateList(id, name, isDone, category);
    const currentStatus = this.listData[index].isDone;
    this.listData[index].items.forEach(element => {
      this.listService.updateItem(element.id, element.name, currentStatus, this.listData[index]);
    });
    // console.log(this.listData[index]);
  }

  updateItem(id, name, isDone, list){
    this.listService.updateItem(id, name, isDone, list);
  }

  deleteItem(id){
    this.listService.deleteItem(id).then(() => window.location.reload());
  }

}
