import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.page.html',
  styleUrls: ['./list-add.page.scss'],
})
export class ListAddPage implements OnInit {
  addListForm: FormGroup;
  submitted = false;

  constructor(
    public listService: ListService, private router: Router, public formBuilder: FormBuilder, public toastController: ToastController) { }

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
    if(!this.addListForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      // console.log(this.addListForm.value);
      this.listService.add(listName, isDone, category).then(
        res => {
          // console.log(res);
          this.router.navigate(['/category-single']).then(() => window.location.reload());
        },
      );
    }
  }

}
