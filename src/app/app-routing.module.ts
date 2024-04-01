import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './AllUsers/users-list/users-list.component';
import { SingleUserComponent } from './userDetails/single-user/single-user.component';

const routes: Routes = 
[
  {
    path: '',
    component:UsersListComponent,
  },
  { path: 'user/:id', component: SingleUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
