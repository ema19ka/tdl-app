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
  {
    path: '**', component: NotFoundComponent ,  // Wildcard route for a 404 page
  },
  //   path: 'test',
  //   component: ExploreContainerComponentModule,
  // },
  // {

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
