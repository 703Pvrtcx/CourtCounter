import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsViewPageRoutingModule } from './stats-view-routing.module';

import { StatsViewPage } from './stats-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsViewPageRoutingModule
  ],
  declarations: [StatsViewPage]
})
export class StatsViewPageModule {}
