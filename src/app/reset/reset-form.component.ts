import { ResetService } from './../service/reset.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Reset } from '../models/reset';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  email: string;
  password: string;
  confirmedPassword: string;
  token: string;
  errMsj: string;

  reset: Reset;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private resetService: ResetService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {

      if(params['token']){
      console.log(params.token); 

      this.token = params.token;

      } else{

        console.log('No hay token')
      }

    })
  }

  restore(){

    if( this.password == this.confirmedPassword ){
    console.log('iguales')

    this.reset = new Reset(this.email, this.token, this.password);

    console.log(this.reset)

    this.resetService.reset(this.reset).subscribe( 
      data => { 

        this.toastr.success('Contraseña modificada', '', {
          timeOut: 3000
        });

        this.router.navigate(['/login']); //va al login   
      },
      err => { 
        this.errMsj = err.error.message;  
        this.toastr.error(this.errMsj, 'Error', {
          timeOut: 3000
        });
      });

    }else{
      console.log('distintas')
    }
  }

}
