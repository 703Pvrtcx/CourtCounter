import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtStatsPage } from './court-stats.page';

const routes: Routes = [
  {
    path: '',
    component: CourtStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtStatsPageRoutingModule {}
