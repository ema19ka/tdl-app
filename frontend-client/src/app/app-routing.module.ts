import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { ExploreContainerComponentModule } from './explore-container/explore-container.component';
// import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
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
    path: 'category-overview',
    loadChildren: () => import('./pages/category-overview/category-overview.module').then( m => m.CategoryOverviewPageModule)
  },
  {
    path: 'list-add',
    loadChildren: () => import('./pages/list-add/list-add.module').then( m => m.ListAddPageModule)
  },
  {
    path: 'list-overview',
    loadChildren: () => import('./pages/list-overview/list-overview.module').then( m => m.ListOverviewPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'test',
  //   component: ExploreContainerComponentModule,
  // },
  // {
  //   path: 'compLogin',
  //   component: LoginComponent,
  // },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
