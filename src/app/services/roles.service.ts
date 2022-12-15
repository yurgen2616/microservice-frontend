import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient
  ) {}

  getRoles(){
    return this.http.get(`${environment.url_roles}/rol`);
  }

  crearRol(rol:any){
    return this.http.post(`${environment.url_roles}/rol`,rol);
  }

}