import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerifericosService } from 'src/app/services/perifericos.service';

@Component({
  selector: 'app-periferico',
  templateUrl: './periferico.component.html',
  styleUrls: ['./periferico.component.css']
})
export class PerifericoComponent {

  perifericos: any[] = [];

  form : FormGroup=new FormGroup({});
  displayBasic: boolean = false;
  mensajePerifericos: string = "";

  constructor(private perifericoService: PerifericosService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.loadForm()
    this.getPerifericos();
    
  }

  getPerifericos() {
    this.perifericoService.getPerifericos().subscribe((response: any) => {
    this.perifericos = response;
    },error => {
      this.mensajePerifericos= "El microservicio no esta disponible";
    })
  }

  showDialog() {
    this.displayBasic = true;
  }

  loadForm(){
    return this.fb.group({
      nombre:['',[Validators.required]],
      marca:['',[Validators.required]],
      usuarioId:['',[Validators.required]]
    });
  }

  crearPeriferico(){
    this.displayBasic=false;
    this.perifericoService.crearPeriferico(this.form.value).subscribe(response =>{
    this.form.reset();
    this.getPerifericos();
    });
  }

}