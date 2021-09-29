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

  mitoken:string;

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

      window.localStorage.role = 0;

      this.tokenService.setToken(this.tokenoauth);

      //------ prueba

    //   this.mitoken = this.tokenService.getToken();
    //   const payload = this.mitoken.split('.')[1];
    // //split convierte un array a partir de un caracter, le ponemos posición 1 para acceder al payload
    // const payloadDecoded = atob(payload);
    // console.log(payloadDecoded)
    // const values = JSON.parse(payloadDecoded); // parseamos a JSON
    // console.log('valores: ')
    // console.log(values)
    // const username = values.sub;

    //otra opción
    //Ver details of user
    //si is_admin es tru, es admin

      //--------------



      this.userName = params.name;

      this.userEmail = params.email;
      

      } else{

        this.infoUser();
      }

    })


    this.nombreUsuario = this.tokenService.getUserName();


  }

  infoUser(){

    this.mitoken = this.tokenService.getToken();
    console.log(this.mitoken)
    const payload = this.mitoken.split('.')[1];
  //split convierte un array a partir de un caracter, le ponemos posición 1 para acceder al payload
  const payloadDecoded = atob(payload);
  console.log(payloadDecoded)
  const values = JSON.parse(payloadDecoded); // parseamos a JSON
  console.log('valores: ')
  console.log(values)
  const username = values.sub;


    this.userEmail = window.localStorage.UserEmail;

    this.userName = window.localStorage.UserName;

  }


}
