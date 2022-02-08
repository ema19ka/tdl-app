import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { CategoryOverviewPage } from './category-overview.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CategoryOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryOverviewPageRoutingModule {}
