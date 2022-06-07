import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  // public category: Category;

  // eslint-disable-next-line max-len
  constructor(public categoryService: CategoryService, private router: Router, public formBuilder: FormBuilder, public toastController: ToastController) { }

  ngOnInit() {
    this.addCategoryForm = this.formBuilder.group({
      catName: ['', [Validators.required, Validators.minLength(3)]],
      catColor: ['', Validators.required],
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
  onAddCategory(){
    // console.log(this.category.name);
    const userid = localStorage.getItem('user');
    const { catName, catColor } = this.addCategoryForm.value;
    this.submitted = true;
    if (!this.addCategoryForm.valid) {
      this.presentToast('All fields required.');
      return false;
    } else {
      this.categoryService.add(catName, catColor, userid).then(
        data => {
          this.router.navigate(['/home']).then(() => window.location.reload());
        },
      );
    }
  }

}
