import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { ListSinglePage } from './list-single.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ListSinglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSinglePageRoutingModule {}
