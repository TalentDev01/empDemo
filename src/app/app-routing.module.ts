import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{
  path : '',
  redirectTo : 'login',
  pathMatch : 'full'
},
{
  path : 'login',
  component : LoginComponent,
},
{
  path : 'dashboard',
  component : DashboardComponent,
  children: [
    {
      path : 'usr',
      component : UsersComponent,
    },
    {
      path : 'adm',
      component : AdminsComponent,
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
