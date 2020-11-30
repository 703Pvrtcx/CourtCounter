import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtViewPageRoutingModule } from './court-view-routing.module';

import { CourtViewPage } from './court-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtViewPageRoutingModule
  ],
  declarations: [CourtViewPage]
})
export class CourtViewPageModule {}
