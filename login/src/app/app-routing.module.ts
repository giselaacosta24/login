import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { ErrorComponent } from "./error/error.component";
const appRoutes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "bienvenido", component: BienvenidoComponent, pathMatch: "full" },
{ path: "error", component: ErrorComponent, pathMatch: "full" },

];
export const routing = RouterModule.forRoot(appRoutes);


