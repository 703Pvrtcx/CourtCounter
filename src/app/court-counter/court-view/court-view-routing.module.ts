import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtViewPage } from './court-view.page';

const routes: Routes = [
  {
    path: '',
    component: CourtViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtViewPageRoutingModule {}
