import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/services/Item';
import { List } from 'src/app/services/List';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-list-single',
  templateUrl: './list-single.page.html',
  styleUrls: ['./list-single.page.scss'],
})
export class ListSinglePage implements OnInit {
  addItemForm: FormGroup;
  itemData: Item = {
    id: '',
    name: '',
    isDone: false,
  };
  listData: List = {
    id: '',
    name: '',
    isDone: false,
    items: []
  };
  responseArray: any[];
  listName: string;
  categoryName: string;
  categoryColor: string;

  // eslint-disable-next-line max-len
  constructor(
    public dataService: DataService,
    public userService: AuthService,
    public formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    this.responseArray = [];
  }

  ngOnInit() {
    // const questionId = this.route.snapshot.paramMap.get('id');
    this.getList();
    this.addItemForm = this.formBuilder.group({
      itemName: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  //saves all Items into listData
  getList() {
    const listId = localStorage.getItem('list');
    this.dataService.getItems(listId);
  }


  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  onAddItem() {
    const { itemName } = this.addItemForm.value;
    const itemDone = false;

    const list = localStorage.getItem('list');

    const currentItem: Item = {
      name: itemName,
      isDone: itemDone,
      id: uuidv4(),
    }

    if (!this.addItemForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      this.dataService.addItem(currentItem.id, currentItem.name, currentItem.isDone, list).then(() => {
        this.dataService.listData.items = [...this.dataService.listData.items, currentItem];
        this.addItemForm.reset();
      });
    }
  }

  updateItem(id, name, isDone) {
    this.dataService.updateItem(id, name, isDone);
  }

  deleteItem(id) {
    this.dataService.deleteItem(id);
  }
}
