import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { parse } from 'querystring';

// Para recibir parámetros. Para el OAuth.
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  nombreUsuario: string; // vacío
  userEmail: string;

  userName: string;

  tokenoauth: string;

  constructor(private tokenService: TokenService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // this.nombreUsuario = this.tokenService.getUserName();

    // this.userEmail = window.localStorage.UserEmail;


    //oAuth -----------

    // this.activatedRoute.queryParams.subscribe(params => {
    //   console.log(params.token); 

    //   this.tokenoauth = params.token;
    // })

    // this.tokenService.setToken(this.tokenoauth);


    
    this.activatedRoute.queryParams.subscribe(params => {

      if(params['token']){
      console.log(params.token); 

      this.tokenoauth = params.token;

      this.tokenService.setToken(this.tokenoauth);

      this.userName = params.name;

      this.userEmail = params.email;
      

      } else{

        this.infoUser();
      }

    })


    this.nombreUsuario = this.tokenService.getUserName();


  }

  infoUser(){

    this.userEmail = window.localStorage.UserEmail;

    this.userName = window.localStorage.UserName;

  }


}
