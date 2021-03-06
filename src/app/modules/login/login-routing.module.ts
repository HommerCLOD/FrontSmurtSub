import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login-components/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'reset-password', component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
