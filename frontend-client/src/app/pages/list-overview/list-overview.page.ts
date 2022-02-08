import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.page.html',
  styleUrls: ['./list-overview.page.scss'],
})
export class ListOverviewPage implements OnInit {
  listData: any;

  constructor(public listService: ListService) {
    this.listData = [];
  }

  ngOnInit() {
    console.log(this.listService.currentList.listName);
    this.listService.getList().then(response => {
      console.log(response);
      this.listData.push(response.data[0].name);
      console.log(this.listData);
    });
  }

}
