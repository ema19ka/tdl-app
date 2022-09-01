import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    // redirectTo: '/home',
    // pathMatch: 'full',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/category-overview.module').then(
            (m) => m.CategoryOverviewPageModule
          ),
      },
      {
        path: 'category-add',
        loadChildren: () =>
          import('./pages/category-add/category-add.module').then(
            (m) => m.CategoryPageModule
          ),
      },
      {
        // path: 'category-single',
        path: 'home/:catId',
        loadChildren: () =>
          import('./pages/category-single/category-single.module').then(
            (m) => m.CategorySinglePageModule
          ),
      },
      {
        path: 'list-add',
        loadChildren: () =>
          import('./pages/list-add/list-add.module').then(
            (m) => m.ListAddPageModule
          ),
      },
      {
        // path: 'list-single',
        //path: 'category/:id, ???
        path: 'home/:catid/:listId',
        loadChildren: () =>
          import('./pages/list-single/list-single.module').then(
            (m) => m.ListSinglePageModule
          ),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./pages/calendar/calendar.module').then(
            (m) => m.CalendarPageModule
          ),
      },
      {
        path: 'timer',
        loadChildren: () =>
          import('./pages/focus-timer/focus-timer.module').then(
            (m) => m.FocusTimerPageModule
          ),
      },
      {
        path: 'planner',
        loadChildren: () =>
          import('./pages/planner/planner.module').then(
            (m) => m.PlannerPageModule
          ),
      },
    ],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '**',
    component: NotFoundComponent, // Wildcard route for a 404 page
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
