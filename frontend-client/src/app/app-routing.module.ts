import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
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
    path: 'category-add',
    loadChildren: () => import('./pages/category-add/category.module').then( m => m.CategoryPageModule)
  },
  // {
  //   path: 'test',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'compLogin',
  //   component: LoginComponent,
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category-overview',
    loadChildren: () => import('./pages/category-overview/category-overview.module').then( m => m.CategoryOverviewPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
