import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category.service';
import { List } from 'src/app/services/List';
import {v4 as uuidv4} from 'uuid';


@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.page.html',
  styleUrls: ['./list-add.page.scss'],
})
export class ListAddPage implements OnInit {
  addListForm: FormGroup;
  submitted = false;

  constructor(
    public categoryService: CategoryService, private router: Router, public formBuilder: FormBuilder, public toastController: ToastController) { }

  ngOnInit() {
    this.addListForm = this.formBuilder.group({
      listName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  onAddList() {
    const { listName } = this.addListForm.value;
    const isDone = false;
    const category = localStorage.getItem('category');
    this.submitted = true;

    const currentList: List = {
      name: listName,
      isDone: isDone,
      id: uuidv4(),
      items: [],

    }


    if(!this.addListForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      this.categoryService.addList(currentList.id, currentList.name, currentList.isDone, category).then(
        () => {
          this.categoryService.catData.lists = [...this.categoryService.catData.lists, currentList];
          this.addListForm.reset();
          this.router.navigate([`home/${currentList.id}`]);
        },
      );
    }
  }

}
