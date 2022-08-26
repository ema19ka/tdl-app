import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Category } from 'src/app/services/Category';
// import { Category } from 'src/app/services/Category';
import { CategoryService } from 'src/app/services/category.service';

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
    public categoryService: CategoryService,
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
    const categoryTest: Category = {
      name: catName,
      color: newColor,
      id: userid,
      lists: []
    }
    // console.log(newColor);

    this.submitted = true;
    if (!this.addCategoryForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      this.categoryService.addCategory(catName, newColor, userid).then((data) => {
        this.categoryService.ApiResult.category = [...this.categoryService.ApiResult.category, categoryTest];
        console.log(this.categoryService.ApiResult.category);

        this.router.navigate(['/home']);
      });
    }
  }

  setColor(color) {
    color = this.addCategoryForm.value.newColor;
    console.log(color);
    // console.log(`Changed value(s) only: ${$event.detail.value}`);

    // const select = document.querySelector('.custom-options');
    // select.interfaceOptions = {
    //   cssClass: 'my-custom-interface'
    // };
  }
}
