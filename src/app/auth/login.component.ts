import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { TokenService } from '../service/token.service';
import { ToastrService } from 'ngx-toastr';

//Se utilizará para comprobar si estamos o no estamos logueados 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variables que nos hacen falta

  loginUsuario: LoginUsuario; // loginusuario, que es un objeto de la clase login-usuario.ts

  cargandoLogin: boolean = false;

  //dos campos, nombre y password, los valores que les pasa al loginusuario
  email: string;
  password: string;
  errMsj: string;  // creada para usarla en el mensaje de error

  constructor( // inyectamos el tokenservice, auth, router y toastr
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  // Método para hacer el login
  onLogin(): void {

    this.cargandoLogin = true;

    //inicializamos el loginusuario y le pasamos el usuario y el password
    this.loginUsuario = new LoginUsuario(this.email, this.password);

    window.localStorage.UserEmail  = this.email;

    //Vamos a enviarlo al authservice
    this.authService.login(this.loginUsuario).subscribe( //loginusuario y nos suscribimos
      data => { // hacemos un callback

        //----------

          // Creamos una variable tipo objeto que contiene valor y fecha actual con la hora
          // var object = {value: data.token, timestamp: new Date().getTime()}
          //Lo añadimos al localstorage, nombre key, con json stringify
          //este método convierte un objeto javascript en una cadena de texto JSON
          // this.tokenService.setToken(JSON.stringify(object));

          var time = new Date().getTime().toString();

          this.tokenService.setToken(data.token);
          this.tokenService.setHour(time);

         

          // this.TryHour();
        //---------------

        //QUITAR COMENTARIO CUANDO PRUEBE!!!!!!!!!!!!!!!!!!!
        // this.tokenService.setToken(data.token);

        window.localStorage.UserName  = data.name; 

        window.localStorage.role = data.role;
        console.log('imprimimos el rol para comprobar')
        console.log(data.role)

        this.router.navigate(['/']);  // lo mandamos al index

        this.cargandoLogin = false;     
      },
      err => { // en caso de error
        this.errMsj = err.error.message;  // variable que habíamos creado para el error, saldrá el mensaje del backend
        this.toastr.error(this.errMsj, 'Error', {
          timeOut: 3000
        });

        this.cargandoLogin = false;   

      }
    );
  }


//   TryHour(){

//     //parse analiza una cadena de texto JSON 
//     // JSON.parse()

//     var object = this.tokenService.getToken()
//     //obtenemos la fecha y hora de este item
  

//     var objectJSON = JSON.parse(object)
    
//     var dateString = objectJSON.timestamp

    
//     // //Creamos nueva variable now con la fecha y hora actual. Le ponemos toString para
//     // //convertirlo a cadena de caracteres
//     var now = new Date().getTime().toString();

//     // //Definimos
//     var ONE_HOUR = 60 * 60 * 1000; /* ms */

//     console.log('La hora del token es: ' + dateString)
//     console.log('La hora actual es: ' + now)

//     //Si es menos de una hora
//     var diference = now - dateString
//     if(diference < ONE_HOUR){
//       console.log('diferencia menor que una hora');      
//     }else{
//       console.log('diferencia mayor a una hora');
//     }

// }

}
