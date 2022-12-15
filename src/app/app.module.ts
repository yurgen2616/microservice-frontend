import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {MenubarModule} from 'primeng/menubar';
import { RolComponent } from './components/rol/rol.component';
import { PerifericoComponent } from './components/periferico/periferico.component';
import { RoutingModule } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PertenenciasComponent } from './components/pertenencias/pertenencias.component';
import {TabViewModule} from 'primeng/tabview';




@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RolComponent,
    PerifericoComponent,
    NavbarComponent,
    LayoutComponent,
    PertenenciasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    RoutingModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
