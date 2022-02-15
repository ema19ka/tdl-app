import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-single',
  templateUrl: './list-single.page.html',
  styleUrls: ['./list-single.page.scss'],
})
export class ListSinglePage implements OnInit {
  listData: any[];
  responseArray: any[];
  listName: string;

  constructor(public listService: ListService, private route: ActivatedRoute, private router: Router) {
    this.listData = [];
    this.responseArray = [];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const listId = localStorage.getItem('list');
    this.listService.getItems(listId).then(response => {
      this.listName = response.data.name;
      this.responseArray.push(response.data);

      this.responseArray[0].items.forEach(element => {
        this.listData.push({
          name: element.name,
          id: element.id,
          isDone: element.isDone,
          list: listId
        });
      });
    });
  }

  updateItem(id, name, isDone, list){
    this.listService.updateItem(id, name, isDone, list);
  }
}