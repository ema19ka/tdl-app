import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.page.html',
  styleUrls: ['./list-add.page.scss'],
})
export class ListAddPage implements OnInit {
  addListForm: FormGroup;
  submitted = false;

  constructor(public listService: ListService, private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addListForm = this.formBuilder.group({
      listName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onAddList() {
    const { listName } = this.addListForm.value;
    const category = localStorage.getItem('category');
    this.submitted = true;
    if(!this.addListForm.valid) {
      console.log('All fields required.');
      return false;
    } else {
      console.log(this.addListForm.value);
      this.listService.add(listName, category).then(
        res => {
          console.log(res);
          this.router.navigate(['/list-overview']);
        },
      );
    }
  }

}
