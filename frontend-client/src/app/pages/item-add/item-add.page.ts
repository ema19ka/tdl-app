import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.page.html',
  styleUrls: ['./item-add.page.scss'],
})
export class ItemAddPage implements OnInit {
  addItemForm: FormGroup;
  submitted = false;

  constructor(public listService: ListService, private router: Router, public formBuilder: FormBuilder) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      itemName: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onAddItem() {
    const { itemName } = this.addItemForm.value;
    const isDone = false;
    const list = localStorage.getItem('list');
    this.submitted = true;
    if(!this.addItemForm.valid) {
      console.log('All fields required.');
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
