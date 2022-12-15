import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PerifericosService {

  constructor(
    private http: HttpClient
  ) {}

  getPerifericos(){
    return this.http.get(`${environment.url_perifericos}/periferico`);
  }

  crearPeriferico(periferico:any){
    return this.http.post(`${environment.url_perifericos}/periferico`,periferico);
  }

}