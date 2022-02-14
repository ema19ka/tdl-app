import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public categoryService: CategoryService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addCategoryForm = this.formBuilder.group({
      catName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onAddCategory(){
    // console.log(this.category.name);
    const userid = localStorage.getItem('user');
    const { catName } = this.addCategoryForm.value;
    this.submitted = true;
    if (!this.addCategoryForm.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      // console.log(this.addCategoryForm.value);
      this.categoryService.add(catName, userid).then(
        data => {
          // console.log(data);
          this.router.navigate(['/category-overview']);
        },
      );
    }
  }

}
