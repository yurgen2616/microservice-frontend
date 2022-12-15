import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']

})
export class UsuarioComponent implements OnInit {

  usuarios: any[] = [];

  form: FormGroup = new FormGroup({});
  displayBasic: boolean = false;

  constructor(private usuarioService: UsuariosService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

    this.form = this.loadForm()
    this.getUsuarios();

  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe((response: any) => {
      this.usuarios = response;
    })
  }

  showDialog() {
    this.displayBasic = true;
  }

  loadForm() {
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      nombre: ['', [Validators.required]]
    });
  }

  crearUsuario() {
    this.displayBasic = false;
    this.usuarioService.crearUsuario(this.form.value).subscribe(response => {
      this.form.reset();
      this.getUsuarios();
    });
  }

  mostrarPertenencias(id: number) {
    this.router.navigate(['/pertenencias',id]);
    console.log(id);
  }

}
