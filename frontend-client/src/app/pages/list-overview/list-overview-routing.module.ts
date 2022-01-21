import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOverviewPage } from './list-overview.page';

const routes: Routes = [
  {
    path: '',
    component: ListOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOverviewPageRoutingModule {}
