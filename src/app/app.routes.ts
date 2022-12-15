import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PerifericoComponent } from "./components/periferico/periferico.component";
import { RolComponent } from "./components/rol/rol.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { PertenenciasComponent } from "./components/pertenencias/pertenencias.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
            path: 'usuario', component: UsuarioComponent
        },
        {
            path: 'rol', component: RolComponent
        },
        {
            path: 'periferico', component: PerifericoComponent
        },
        {
            path: 'pertenencias/:id', component: PertenenciasComponent
        },
        {
            path: '**',
            redirectTo: 'usuario',
        }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule{

}