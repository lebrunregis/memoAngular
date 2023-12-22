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
import { ImageModule } from 'primeng/image';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { CreateMemoComponent } from './memo/create-memo/CreateMemoComponent';
import { ListMemoComponent } from './memo/list-memo/list-memo.component';
import { EditMemoComponent } from './memo/edit-memo/edit-memo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateMemoComponent,
    ListMemoComponent,
    EditMemoComponent,
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
    InputTextareaModule,
    ImageModule,
    SplitButtonModule,
    FieldsetModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }