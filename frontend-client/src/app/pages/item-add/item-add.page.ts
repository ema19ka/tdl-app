import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.page.html',
  styleUrls: ['./item-add.page.scss'],
})
export class ItemAddPage implements OnInit {
  addItemForm: FormGroup;
  submitted = false;

  // eslint-disable-next-line max-len
  constructor(public listService: ListService, private router: Router, public formBuilder: FormBuilder, public toastController: ToastController) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      itemName: ['', [Validators.required, Validators.minLength(2)]]
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

  onAddItem() {
    const { itemName } = this.addItemForm.value;
    const isDone = false;
    const list = localStorage.getItem('list');
    this.submitted = true;
    if(!this.addItemForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      // console.log(this.addItemForm.value);
      this.listService.addItem(itemName, isDone, list).then(
        res => {
          // console.log(res);
          this.router.navigate(['/list-single']).then(() => window.location.reload());
        },
      );
    }
  }

}
