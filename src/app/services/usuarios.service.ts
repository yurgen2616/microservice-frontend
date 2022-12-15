import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) {}

  getUsuarios(){
    return this.http.get(`${environment.url_usuarios}/usuario`);
  }

  getPertenencias(usuarioId : number){
    return this.http.get(`${environment.url_usuarios}/usuario/todos/${usuarioId}`);
  }

  crearUsuario(usuario:any){
    return this.http.post(`${environment.url_usuarios}/usuario`,usuario);
  }

}
