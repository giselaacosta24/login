import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  mitipo = 'text';
  num1 :number=0;
  num2 :number=0;
  resultado :any;

  mostrarAlert()
  {
  //this.title="cambiando titulo";
   console.log(this.title);
  }


  sumar()
  {
   this.resultado=this.num1+this.num2;
   console.log(this.resultado);
  }
}
