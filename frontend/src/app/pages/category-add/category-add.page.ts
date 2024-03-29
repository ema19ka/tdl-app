import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/app/services/Category';
// import { Category } from 'src/app/services/Category';
import { DataService } from 'src/app/services/data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.page.html',
  styleUrls: ['./category-add.page.scss'],
})
export class CategoryPage implements OnInit {
  addCategoryForm: FormGroup;
  submitted = false;
  color: string;

  constructor(
    public dataService: DataService,
    private router: Router,
    public formBuilder: FormBuilder,
    public toastController: ToastController
  ) {}

  customAlertOptions: any = {
    cssClass: 'my-custom-interface',
  };

  ngOnInit() {
    this.addCategoryForm = this.formBuilder.group({
      catName: ['', [Validators.required, Validators.minLength(3)]],
      newColor: ['', Validators.required],
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
  onAddCategory() {
    const userid = localStorage.getItem('user');
    const { catName, newColor } = this.addCategoryForm.value;
    const currentCategory: Category = {
      name: catName,
      color: newColor,
      id: uuidv4(),
      lists: [],
    };

    this.submitted = true;
    if (!this.addCategoryForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      this.dataService
        .addCategory(currentCategory.id, currentCategory.name, currentCategory.color, userid)
        .then(() => {
          this.dataService.ApiResult.category = [
            ...this.dataService.ApiResult.category,
            currentCategory,
          ];
          this.addCategoryForm.reset();
          this.router.navigate(['/home']);
        });
    }
  }

  setColor(color: string) {
    color = this.addCategoryForm.value.newColor;
  }
}
