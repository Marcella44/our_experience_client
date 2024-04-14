import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { noAuthGuard } from './auth/no-auth.guard';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
      path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
      path: 'create-user',
      loadComponent: () => import('./create-user/create-user.component').then((m) => m.CreateUserComponent),
      canActivate: [noAuthGuard],
    },
    {
      path: 'diagnosis-list',
		  loadComponent: () => import('./diagnosis-list/diagnosis-list.component').then((m) => m.DiagnosisListComponent),
		  canActivate: [authGuard],
    },
    {
      path: 'post-list',
		  loadComponent: () => import('./post-list/post-list.component').then((m) => m.PostListComponent),
		  canActivate: [authGuard],
    },
    {
      path: 'profile',
		  loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent),
		  canActivate: [authGuard],
    },


];
