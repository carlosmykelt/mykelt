import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Similar al login, estas variables están copiadas

  nuevoUsuario: NuevoUsuario;
  name: string;
  password: string;
  password_confirmation: string;
  email: string;

  errMsj: string;

  cargandoRegistro: boolean = false;

  public registerForm: FormGroup;

  confirmation: boolean = false;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    // this.registerForm = this.createForm();



  }

  ngOnInit() {
  }

  // get Name() { return this.registerForm.get('name'); }

  // createForm() {
  //   return new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
  //     name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //     // message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
  //   });
  // }

  confirm(){
console.log(this.password)
console.log(this.password_confirmation)
if(this.password_confirmation == this.password){
  this.confirmation = true
  console.log(this.confirmation)
  }else{
  this.confirmation = false
  console.log(this.confirmation)
  }
}

//  confirm(){

//   if(this.password == this.password_confirmation){
//     return true;
//   }else{
//     return false;
//   }

// }


  //Método para registrarse
  onRegister(): void {


      this.cargandoRegistro = true;

      this.nuevoUsuario = new NuevoUsuario(this.name, this.password, this.password_confirmation, this.email);
      this.authService.nuevo(this.nuevoUsuario).subscribe(
        data => {
          this.toastr.success('Cuenta creada', '', {
            timeOut: 3000
          });

          this.router.navigate(['/login']); //va al login

          this.cargandoRegistro = false;
        },
        err => { // si hay error
          this.errMsj = err.error.mensaje;
          this.toastr.error(this.errMsj, 'Error', {
            timeOut: 3000
          });

          this.cargandoRegistro = false;

        }
      );

  }


}
