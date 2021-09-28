import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


const TOKEN_KEY = 'AuthToken';  // de clave

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  //Creamos un array con los roles

  roles: Array<string> = [];

  constructor(
    private router: Router


  ) { }

  //getter y setter

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);

    //-----------


  //   const now = new Date()

  //   const item = {
  //     value: token,
  //     expiry: now.getTime() + 10*1000,
  //   }
  //  localStorage.setItem(TOKEN_KEY, JSON.stringify(item));


    //-----------

    window.localStorage.setItem(TOKEN_KEY, token); // token key y el token que le estamos pasando como parámetro
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {

    if (this.getToken()) {
      return true;
    }

    return false;
  }

//------------
  //   // Verify the token
  //   isValidToken(){
  //     const token = this.getToken();
 
  //     if(token){
  //       const payload = this.payload(token);
  //       if(payload){
  //         return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
  //       }
  //     } else {
  //        return false;
  //     }
  //  }
  //  payload(token) {
  //   const jwtPayload = token.split('.')[1];
  //   return JSON.parse(atob(jwtPayload));
  // }
  // private issuer = {
  //   login: 'http://127.0.0.1/api/login',
  //   register: 'http://127.0.0.1/api/register'
  // }

  //  // User state based on valid token
  //  isLoggedIn() {
  //   return this.isValidToken();
  // }
  //----------


  public getUserName(): string {
    if (!this.isLogged()) {
      return null;
    }
    // el token tiene un aspecto similar a este: dijsdnfdjinf.fasidjnffi.fisjdfnsdif 
    // se compone de: header, payload y firma
    // ahora nos interesa el payload
    // Para sacarlo, lo primero que hacemos es convertir la cadena en un array de cadenas

    const token = this.getToken();
    const payload = token.split('.')[1];
    //split convierte un array a partir de un caracter, le ponemos posición 1 para acceder al payload
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded); // parseamos a JSON
    
    const username = values.sub;
    return username;
  }

  public isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    // el token tiene un aspecto similar a este: dijsdnfdjinf.fasidjnffi.fisjdfnsdif 
    // se compone de: header, payload y firma
    // ahora nos interesa el payload
    // lo primero que hacemos es convertir la cadena en un array de cadenas

    const token = this.getToken();
    const payload = token.split('.')[1];
    //split convierte un array a partir de un caracter, le ponemos posición 1 para acceder al payload
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded); // parseamos a JSON
//    const roles = values.roles;  Esta es importante si quieres diferenciar entre admin y user

    return true;
  }

  //Para cerrar sesión
  public logOut(): void {
    window.localStorage.clear(); // Va a limpiar todo lo que tengamos en el sesionstorage
    this.router.navigate(['/login']); // Vamos a inicio
  }
}
