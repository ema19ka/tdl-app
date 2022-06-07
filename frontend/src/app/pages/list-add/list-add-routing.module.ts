import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { ListAddPage } from './list-add.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ListAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAddPageRoutingModule {}
