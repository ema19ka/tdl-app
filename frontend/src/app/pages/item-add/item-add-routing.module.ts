import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { ItemAddPage } from './item-add.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ItemAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemAddPageRoutingModule {}
