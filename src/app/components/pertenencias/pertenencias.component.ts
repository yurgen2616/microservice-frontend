import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-pertenencias',
  templateUrl: './pertenencias.component.html',
  styleUrls: ['./pertenencias.component.css']
})
export class PertenenciasComponent {

  pertenencias: any = {
    "Usuario": {
      "id": 0,
      "nombre": "",
      "email": ""
    },
    "Perifericos": [],
    "Roles": []
  };

  form: FormGroup = new FormGroup({});
  displayBasic: boolean = false;
  mensajeRol: string = "";
  mensajePeriferico: string = "";

  constructor(private usuarioService: UsuariosService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param: any)=> {
    this.getPertenencias(param.id);
    })
  }

  getPertenencias(id : number) {
    this.usuarioService.getPertenencias(id).subscribe((response: any) => {
      this.pertenencias = response;
      console.log(this.pertenencias);
      if (typeof this.pertenencias.Roles=="string") {
        this.mensajeRol = this.pertenencias.Roles;
        this.pertenencias.Roles = [];
      }
      if (typeof this.pertenencias.Perifericos=="string") {
        this.mensajePeriferico = this.pertenencias.Perifericos;
        this.pertenencias.Perifericos = [];
      }
    })
  }

}