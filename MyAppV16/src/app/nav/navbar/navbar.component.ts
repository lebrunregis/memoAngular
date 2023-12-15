import { Component} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
items!: MenuItem[];
activeItem!: MenuItem;

constructor() {
  this.items = [
      { label: 'Memos', routerLink:"memo/list"},
      { label: 'Ajouter Memo' ,  routerLink:"memo/create"},
  ];
  this.activeItem = this.items[0]
}
}
