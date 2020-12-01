import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtStatsPageRoutingModule } from './court-stats-routing.module';

import { CourtStatsPage } from './court-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtStatsPageRoutingModule
  ],
  declarations: [CourtStatsPage]
})
export class CourtStatsPageModule {}
