import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService } from './guards/prod-guard.service';



import { LoginGuard } from './guards/login.guard';
import { ListaPostComponent } from './post/lista-post.component';
import { NuevoPostComponent } from './post/nuevo-post.component';
import { FullPostComponent } from './post/full-post.component';
import { EditarPostComponent } from './post/editar-post.component';
import { SetupCardComponent } from './stripe/setup-card.component';
import { CartComponent } from './cart/cart.component';
import { ResetPasswordComponent } from './reset/reset-password.component';
import { ResetFormComponent } from './reset/reset-form.component';



const routes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },

  { path: 'restablecer', component: ResetPasswordComponent },
  { path: 'formulario-restablecer', component: ResetFormComponent },


  // component: ListaProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] }

  { path: 'productos', component: ListaProductoComponent },
  { path: 'productos/:id', component: DetalleProductoComponent},
  // , canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } 
  

  // { path: 'nuevo', component: NuevoProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  // { path: 'editar/:id', component: EditarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user'] } },
  
  { path: 'setupcard', component: SetupCardComponent },

  { path: 'cart', component: CartComponent },
  
  { path: 'articulos', component: ListaPostComponent },
  { path: ':id', component: FullPostComponent },

  { path: 'articulos/nuevo', component: NuevoPostComponent, canActivate: [ProdGuardService] },
  { path: 'articulos/editar/:id', component: EditarPostComponent, canActivate: [ProdGuardService] },



  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
