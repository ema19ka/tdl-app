import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FocusTimerPage } from './focus-timer.page';

const routes: Routes = [
  {
    path: '',
    component: FocusTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FocusTimerPageRoutingModule {}
