import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(moduleFile => moduleFile.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('../registration/registration.module').then(moduleFile => moduleFile.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
