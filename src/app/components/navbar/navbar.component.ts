import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Usuario',
        icon: 'pi pi-fw pi-user',
        routerLink: 'usuario'
      },
      {
        label: 'Roles',
        icon: 'pi pi-fw pi-sitemap',
        routerLink: 'rol'
      },
      {
        label: 'Perifericos',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: 'periferico'
      }
    ];
  }
  
}
