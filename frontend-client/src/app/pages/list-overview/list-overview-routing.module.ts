import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { ListOverviewPage } from './list-overview.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ListOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOverviewPageRoutingModule {}
