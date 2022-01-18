import { Injectable } from '@angular/core';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public currentCategory: Category = {
    id: '1',
    name: 'Name',
  };

  // constructor() {
  //   this.load();
  //  }

  //  addCategory() {
  //    Storage.set({
  //      key: 'TDL',
  //      value: JSON.stringify(this.currentCategory)
  //    });
  //    console.log('save');
  //  }
}
