import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entidades/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private  router:Router) { }

  miUsuario=new Usuario();
  entrar()
  {
    localStorage.setItem('usuario', JSON.stringify(this.miUsuario.correo));


    this.router.navigate(['bienvenido']) ;  
  }
 

}
