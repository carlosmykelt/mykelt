import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario: NuevoUsuario;
  name: string;
  password: string;
  password_confirmation: string;
  email: string;

  errMsj: string;

  cargandoRegistro: boolean = false;

  public registerForm: FormGroup;

  confirmation: boolean = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private titleService: Title

  ) {

  }

  ngOnInit() {

    this.titleService.setTitle('Registro | MYKELT');
  }

  confirm() {
    console.log(this.password)
    console.log(this.password_confirmation)
    if (this.password_confirmation == this.password) {
      this.confirmation = true
      console.log(this.confirmation)
    } else {
      this.confirmation = false
      console.log(this.confirmation)
    }
  }

  //Método para registrarse
  onRegister(): void {

    this.cargandoRegistro = true;

    this.nuevoUsuario = new NuevoUsuario(this.name, this.password, this.password_confirmation, this.email);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.toastr.success('Cuenta creada', '', {
          timeOut: 3000
        });

        this.router.navigate(['/login']); // va al login

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
