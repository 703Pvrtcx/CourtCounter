import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtAddPage } from './court-add.page';

const routes: Routes = [
  {
    path: '',
    component: CourtAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtAddPageRoutingModule {}
