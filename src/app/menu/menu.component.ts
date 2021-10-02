import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;  // variable de si está logueado

  isAdmin: number = window.localStorage.role;

  nombreUsuario: string;

  constructor(private tokenService: TokenService) {

   }  // le inyectamos un tokenservice

  ngOnInit() {

    // this.isLogged = this.tokenService.timeToken();

    // //-----
    // var object = this.tokenService.getToken()
    // var objectJSON = JSON.parse(object)
    // var dateString = objectJSON.timestamp
    // var now = new Date().getTime().toString();
    // var ONE_HOUR = 1 * 5 * 1000;
  
    // var diference = now - dateString
    // console.log('La diferencia es: ' + (diference/1000))
    // if(diference < ONE_HOUR){
    //   console.log('diferencia menor que 10 seg');      
    // }else{
    //   console.log('diferencia mayor a 10 seg');
    //   window.localStorage.clear();
    // }

    //------

    // COMENTAMOS DE MOMENTO
    this.isLogged = this.tokenService.isLogged();
  
  }

  onLogOut(): void { // Accedes a través del html, para el logout
    this.tokenService.logOut();
  }
  
}
