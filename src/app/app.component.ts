import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-microservicios';
  constructor(private primengConfig: PrimeNGConfig) { }
  
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

