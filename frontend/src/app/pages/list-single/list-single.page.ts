import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { CategoryService } from 'src/app/services/category.service';
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
    public categoryService: CategoryService,
    public userService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    public toastController: ToastController
  ) {
    // this.listData = [];
    this.responseArray = [];
  }

  ngOnInit() {
    // const questionId = this.route.snapshot.paramMap.get('id');
    this.getCategory();
    this.getList();
    this.addItemForm = this.formBuilder.group({
      itemName: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  //saves all Items into listData
  getList() {
    const listId = localStorage.getItem('list');
    this.categoryService.getItems(listId).then((response) => {
      console.log(response);

      // this.listData.items.push(response.data);

      console.log(this.listData);

    });
  }

  getCategory() {
    // const categoryId = localStorage.getItem('category');
    // this.categoryService.getList(categoryId).then((response) => {
    //   this.categoryName = response.data.name;
    //   this.categoryColor = response.data.color;
    //   document.body.style.setProperty('--ion-color-category', this.categoryColor);
    // });
    
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
    console.log
    const { itemName } = this.addItemForm.value;
    const itemDone = false;

    // this.itemData.name = this.addItemForm.value;
    // this.itemData.isDone = false;
    const list = localStorage.getItem('list');

    const currentItem: Item = {
      name: itemName,
      isDone: itemDone,
      id: uuidv4(),
    }

    // this.submitted = true;
    if (!this.addItemForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      // console.log(this.addItemForm.value);
      this.categoryService.addItem(currentItem.id, itemName, itemDone, list).then((res) => {
        // console.log(res);
        this.categoryService.listData.items = [...this.categoryService.listData.items, currentItem];
        this.addItemForm.reset();
        // this.router
        //   .navigate([this.listData.id])
          // .then(() => window.location.reload());
      });
    }
  }

  updateItem(id, name, isDone, list) {
    this.categoryService.updateItem(id, name, isDone, list);
  }

  deleteItem(id) {
    this.categoryService.deleteItem(id);
  }
}
