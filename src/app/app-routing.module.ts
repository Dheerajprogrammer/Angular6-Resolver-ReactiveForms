import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserResolverService } from "./resolver/user-resolver.service";
const routes: Routes = [
  { path: 'UserEntry', component: UserEntryComponent },
  {
    path: 'UserList',
    component: UserListComponent,
    resolve: {
      UserResolverList: UserResolverService
    }
  },
  {
    path: '',
    redirectTo: 'UserList',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolverService]
})
export class AppRoutingModule { }
