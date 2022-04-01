import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suma } from '../Entidades/suma';
import { Usuario } from '../Entidades/usuario';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent  {
  title = 'Calcular';
  mitipo = 'text';

   usuariocorreo :any;
   miSuma=new Suma();
   usuarioLogueado=new Usuario();
   
  ngOnInit() {
   this.usuariocorreo=JSON.parse(localStorage.getItem('usuario')|| '{}')
console.log(this.usuariocorreo);
this.usuarioLogueado.correo=this.usuariocorreo;
  }
   constructor(private  router:Router) { }

  mostrarAlert()
  {
   console.log(this.title);
  }

  salir()
  {
    this.router.navigate(['login']) ;  
  }
}
