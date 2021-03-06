import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo:  'court-add',
    pathMatch: 'full'
  },
    //Court Count Routing
  {
    path: 'registration',
    loadChildren: () => import('./page/pages/sign-in/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./page/pages/sign-in/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/pages/sign-in/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./page/pages/sign-in/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'court-view',
    loadChildren: () => import('./page/pages/court-counter/court-view/court-view.module').then( m => m.CourtViewPageModule)
  },
  {
    path: 'court-stats',
    loadChildren: () => import('./page/pages/court-counter/court-stats/court-stats.module').then( m => m.CourtStatsPageModule)
  },
  {
    path: 'court-add',
    loadChildren: () => import('./page/pages/court-counter/court-add/court-add.module').then( m => m.CourtAddPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
