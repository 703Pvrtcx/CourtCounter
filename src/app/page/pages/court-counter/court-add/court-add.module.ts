import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtAddPageRoutingModule } from './court-add-routing.module';

import { CourtAddPage } from './court-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtAddPageRoutingModule
  ],
  declarations: [CourtAddPage]
})
export class CourtAddPageModule {}
