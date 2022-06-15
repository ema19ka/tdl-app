import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { ExploreContainerComponentModule } from './explore-container/explore-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category-add',
    loadChildren: () => import('./pages/category-add/category-add.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/category-overview/category-overview.module').then( m => m.CategoryOverviewPageModule)
  },
  {
    path: 'category-single',
    loadChildren: () => import('./pages/category-single/category-single.module').then( m => m.CategorySinglePageModule)
  },
  {
    path: 'list-add',
    loadChildren: () => import('./pages/list-add/list-add.module').then( m => m.ListAddPageModule)
  },
  {
    path: 'list-single',
    loadChildren: () => import('./pages/list-single/list-single.module').then( m => m.ListSinglePageModule)
  },
  {
    path: 'item-add',
    loadChildren: () => import('./pages/item-add/item-add.module').then( m => m.ItemAddPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/focus-timer/focus-timer.module').then( m => m.FocusTimerPageModule)
  },
  {
    path: 'planner',
    loadChildren: () => import('./pages/planner/planner.module').then( m => m.PlannerPageModule)
  },
  {
    path: '**', component: NotFoundComponent ,  // Wildcard route for a 404 page
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
