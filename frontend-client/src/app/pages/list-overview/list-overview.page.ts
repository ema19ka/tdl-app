import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.page.html',
  styleUrls: ['./list-overview.page.scss'],
})
export class ListOverviewPage implements OnInit {
  listData: any;
  responseArray: any[];

  constructor(public listService: ListService) {
    this.listData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    console.log(this.listService.currentList.listName);
    this.listService.getList().then(response => {
      console.log(response);
      this.responseArray.push(response.data);

      this.responseArray[0].forEach(element => {
        this.listData.push(element.name);
      });
      console.log(this.listData);
    });
  }

}
