import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ScrollerModule } from 'primeng/scroller';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { CreateMemoComponent } from './memo/create-memo/create-memo.component';
import { ListMemoComponent } from './memo/list-memo/list-memo.component';
import { EditMemoComponent } from './memo/edit-memo/edit-memo.component';
import { DetailMemoComponent } from './memo/detail-memo/detail-memo.component';
import { DeleteMemoComponent } from './memo/delete-memo/delete-memo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateMemoComponent,
    ListMemoComponent,
    EditMemoComponent,
    DetailMemoComponent,
    DeleteMemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    TabViewModule,
    ScrollerModule,
    VirtualScrollerModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
