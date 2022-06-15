import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FocusTimerPageRoutingModule } from './focus-timer-routing.module';

import { FocusTimerPage } from './focus-timer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FocusTimerPageRoutingModule
  ],
  declarations: [FocusTimerPage]
})
export class FocusTimerPageModule {}
