import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { CreateMemoComponent } from './memo/create-memo/create-memo.component';
import { DeleteMemoComponent } from './memo/delete-memo/delete-memo.component';
import { DetailMemoComponent } from './memo/detail-memo/detail-memo.component';
import { ListMemoComponent } from './memo/list-memo/list-memo.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

const routes: Routes = [   { path: 'nav', component: NavbarComponent },
{ path: 'memo', children: 
[ {
 path: 'create', component: CreateMemoComponent,
}, {
 path: 'list', component: ListMemoComponent
}, {
 path: 'detail', component: DetailMemoComponent
}, {
 path: 'update', component: CreateMemoComponent
}, {
 path: 'delete', component: DeleteMemoComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
