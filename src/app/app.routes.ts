import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { noAuthGuard } from './no-auth.guard';


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
];
