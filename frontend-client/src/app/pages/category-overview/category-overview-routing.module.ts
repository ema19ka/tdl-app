import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryOverviewPage } from './category-overview.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryOverviewPageRoutingModule {}
