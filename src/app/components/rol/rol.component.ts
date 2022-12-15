import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';
@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent {

  roles: any[] = [];

  form : FormGroup=new FormGroup({});
  displayBasic: boolean = false;
  mensajeRoles: string = "";

  constructor(private rolService: RolesService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.loadForm()
    this.getRoles();
    
  }

  getRoles() {
    this.rolService.getRoles().subscribe((response: any) => {
    this.roles = response;
    },error => {
      this.mensajeRoles= "El microservicio no esta disponible";
    }
    )
  }

  showDialog() {
    this.displayBasic = true;
  }

  loadForm(){
    return this.fb.group({
      nombre:['',[Validators.required]],
      fechaIngreso:['',[Validators.required]],
      usuarioId:['',[Validators.required]]
    });
  }

  crearRol(){
    this.displayBasic=false;
    this.rolService.crearRol(this.form.value).subscribe(response =>{
    this.form.reset();
    this.getRoles();
    });
  }

}
