import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
items: MenuItem[]|undefined;
activeItem: MenuItem|undefined;

constructor(private _router: Router) {
 }

ngOnInit() {
  this.items = [
      { label: 'Memos', routerLink:"memo/create"},
      { label: 'Ajouter Memo' ,  routerLink:"memo/list"},
  ];
}
}
