import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Category } from 'src/app/services/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  // public category: Category;

  constructor(public categoryService: CategoryService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onAddCategory(){
    // console.log(this.category.name);
    const { name } = this.myForm.value;
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      console.log(this.myForm.value);
      this.categoryService.add(name).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/category-overview']);
        },
      );
    }
  }

}
