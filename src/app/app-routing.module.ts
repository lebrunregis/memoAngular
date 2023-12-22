import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { CreateMemoComponent } from './memo/create-memo/CreateMemoComponent';
import { ListMemoComponent } from './memo/list-memo/list-memo.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

const routes: Routes = [  
{ path: '', redirectTo: '/memo/list', pathMatch: 'full' }, 
{ path: 'nav', component: NavbarComponent },
{ path: 'memo', children: 
[ {
 path: 'create', component: CreateMemoComponent,
}, {
 path: 'list', component: ListMemoComponent
}, {
 path: 'edit/:id', component: CreateMemoComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
