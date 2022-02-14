import { Component, OnInit } from '@angular/core';
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

  constructor(public listService: ListService) {
    this.listData = [];
    this.responseArray = [];
   }

  ngOnInit() {
    this.getList();
  }

  getList() {
    const listId = localStorage.getItem('list');
    console.log(listId);
    this.listService.getItems(listId).then(response => {
      console.log(response);
      this.listName = response.data.name;
      this.responseArray.push(response.data);
      console.log(this.responseArray);

      this.responseArray[0].items.forEach(element => {
        this.listData.push({
          name: element.name,
          id: element.id,
          isDone: element.isDone,
          list: listId
        });
      });

      console.log(this.listData);
    });
  }

  updateItem(id, name, isDone, list){
    console.log(id, name, isDone, list);
    this.listService.updateItem(id, name, isDone, list);
    console.log(this.listData);
  }
}
