import { Email } from './../models/email';
import { ResetService } from './../service/reset.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email: string;
  errMsj: string; 
  EmailReset: Email;

  constructor(
    private tokenService: TokenService,
    private resetService: ResetService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  restore(){

    this.EmailReset = new Email(this.email);

    this.resetService.email(this.EmailReset).subscribe(
      data=> {

        console.log(data);

        this.toastr.success('Correo electrónico enviado', '', {
          timeOut: 3000
        });
       

      }, err=>{

        this.errMsj = err.error.message;  // variable que habíamos creado para el error, saldrá el mensaje del backend
        this.toastr.error(this.errMsj, 'Error', {
          timeOut: 3000
        });

      });


  }

}