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

  constructor(private tokenService: TokenService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log('logueado o no');
    
    console.log(this.tokenService.isLogged());

    console.log(this.tokenService.getToken())
    
    if(this.tokenService.isLogged()){
      this.tokenService.timeToken();
    }


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

      //comentamos de momento
      // this.tokenService.setToken(this.tokenoauth);

      //-----

                // Creamos una variable tipo objeto que contiene valor y fecha actual con la hora
                // var object = {value: this.tokenoauth, timestamp: new Date().getTime()}
                //Lo añadimos al localstorage, nombre key, con json stringify
                //este método convierte un objeto javascript en una cadena de texto JSON
                // this.tokenService.setToken(JSON.stringify(object));

                var time = new Date().getTime().toString();

                this.tokenService.setToken(this.tokenoauth);
                this.tokenService.setHour(time);
//---
window.localStorage.userName = params.name;
window.localStorage.UserEmail = params.email;

      this.userName = window.localStorage.userName;

      this.userEmail = window.localStorage.UserEmail;

      } else{

        if(this.tokenService.isLogged()){
        this.infoUser();
        }
      }

    })


  this.nombreUsuario = this.tokenService.getUserName();
  console.log('comprobamos el nombreusuario')
  console.log(this.nombreUsuario);
  

   
  }

  infoUser(){

    if(this.tokenService.isLogged){

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

}
