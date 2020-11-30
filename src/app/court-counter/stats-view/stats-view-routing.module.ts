import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsViewPage } from './stats-view.page';

const routes: Routes = [
  {
    path: '',
    component: StatsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsViewPageRoutingModule {}
