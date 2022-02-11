import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSinglePageRoutingModule } from './list-single-routing.module';

import { ListSinglePage } from './list-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSinglePageRoutingModule
  ],
  declarations: [ListSinglePage]
})
export class ListSinglePageModule {}
