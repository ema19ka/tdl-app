import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryOverviewPageRoutingModule } from './category-overview-routing.module';

import { CategoryOverviewPage } from './category-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryOverviewPageRoutingModule
  ],
  declarations: [CategoryOverviewPage]
})
export class CategoryOverviewPageModule {}
