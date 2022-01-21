import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOverviewPageRoutingModule } from './list-overview-routing.module';

import { ListOverviewPage } from './list-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOverviewPageRoutingModule
  ],
  declarations: [ListOverviewPage]
})
export class ListOverviewPageModule {}
