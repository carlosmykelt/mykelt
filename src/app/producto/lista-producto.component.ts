import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

import { IndexComponent } from '../index/index.component';
import { Sinid } from '../models/sinid';

import { DecimalPipe } from '@angular/common'; // para decimal pipe
import { Cart } from '../models/cart';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: any[] = [];

  cartProduct: Cart[];

  price: any[] = [];
  
  cargado: boolean = false;
  
  // productosCartera: Producto[] = [];

  cargando: boolean = true;

  duplicado: Producto[] = [];

  listaAdmin: Producto[] = [];

  isAdmin = false;

  //Para cargar usuario
  isLogged = false;
  nombreUsuario: string = '';


  filterPost = '';

  constructor(

    private cartService: CartService,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router,
    private DecimalPipe: DecimalPipe
  ) { }

  ngOnInit() {

    this.cargarProductos(); // Carga los productos


    this.isAdmin = this.tokenService.isAdmin();

    //  ---------

    let arrayprices: any[] = 
    [
    {
      price: 'price_1JRykpEDzo7bolN0pL6nAUjv'
    },
    {
      price: 'price_1JRwekEDzo7bolN0BFSLdzXs'
    }
  ]

  for(let pri of arrayprices){
    console.log(pri.price);
  }


  }

  // SistemaEuropeo(SistemaAmericano :number){ // Lo modifico
  //   let TerConComa = this.DecimalPipe.transform(SistemaAmericano, "1.2-2", 'es')
  //   return TerConComa;
  // }


  //TENEMOS 3 MÉTODOS: CARGARPRODUCTOS, BORRAR, PRICEID Y CHECKOUT
  //'CARGARPRODUCTOS' CARGAR LOS PRUDUCTOS Y 'BORRAR' LOS BORRA
  //PRICEID OPTIENE EL PRECIO ID A PARTIR DEL PRODUCTOID
  //CHECKOUT VA AL CHECKOUT. USA LOS PRICEIDS PARA HACERLO
  //POR LO TANTO, PRICEID Y CHECKOUT REALMENTE VAN A IR EN EL COMPONENTE DEL CARRITO, PARA CUANDO PULSEN PAGAR

  cargarProductos(): void {



    this.productoService.lista().subscribe(
      data => {
        this.productos = data; // lo carga en el Array que hemos creado, llamado productos

        console.log('imprimimos productos');
        console.log(this.productos);
        
        this.cargado = true;

      },
      err => {
        console.log(err);
      }
    );

  }


  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto eliminado', '', {
          timeOut: 3000
        });
        this.cargarProductos();

      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000
        });
      }
    );
  }

  addCart(productoId: string, quantity: number){   // TIENE QUE RECIBIR EL PRODUCTID Y EL QUANTITY

    console.log('Este es el producto id: ' + productoId);
    console.log('Esta es la cantidad: ' + quantity);

  }

  // ------- COMENTO ESTOS DOS MÉTODOS, QUE IRÁN EN EL COMPONENTE DEL CARRITO ------

  // priceId(productoId: string){

  //   // console.log(productoId)

  //   this.productoService.price(productoId).subscribe(
  //     data => {
  //       this.price = data; // lo carga en el Array que hemos creado, llamado productos

  //       console.log('imprimimos price');
  //       console.log(this.price.data[0].id);

  //       let PriceId = this.price.data[0].id;

  //       this.checkout(PriceId);

  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );

    
  // }


  // checkout(PriceId) {

  //   // console.log('llega a función checkout y el id es: ' + PriceId)
  //   var stripe = stripe('pk_test_51JRiEIEDzo7bolN088LIgi5eh0JTbRj3EurNrzaXPvxNxsahf4UNZFIhYIoSEBoa9Hg9KIuyCXozhsugpXWGToyW00N8wnTgEu');
  
  //   // var checkoutButton = document.getElementById('checkout-button-price_1JRykpEDzo7bolN0pL6nAUjv');
  //   // checkoutButton.addEventListener('click', function () {
  //     /*
  //      * When the customer clicks on the button, redirect
  //      * them to Checkout.
  //      */


  //     stripe.redirectToCheckout({
  //       lineItems: [
  //         {price: 'price_1JRykpEDzo7bolN0pL6nAUjv', quantity: 1},
  //         {price: 'price_1JRwekEDzo7bolN0BFSLdzXs', quantity: 1}
  //       ],
  //       //Esto sería la dirección de la tarjeta, de momento no la necesito
  //       // billingAddressCollection: 'required', 
  //       shippingAddressCollection:  
  //         {
  //           allowedCountries: ['ES', 'US', 'CH', 'DE', 'GB', 'NZ' ],
  //         }, 
  //       mode: 'payment',
  //       /*
  //        * Do not rely on the redirect to the successUrl for fulfilling
  //        * purchases, customers may not always reach the success_url after
  //        * a successful payment.
  //        * Instead use one of the strategies described in
  //        * https://stripe.com/docs/payments/checkout/fulfill-orders
  //        */
  //       successUrl: window.location.protocol + '//http://localhost:4200/lista',
  //       cancelUrl: window.location.protocol + '//http://localhost:4200/canceled',
  //     })
  //     .then(function (result) {
  //       if (result.error) {
  //         /*
  //          * If `redirectToCheckout` fails due to a browser or network
  //          * error, display the localized error message to your customer.
  //          */
  //         var displayError = document.getElementById('error-message');
  //         displayError.textContent = result.error.message;
  //       }
  //     });
  //   // });
  // }


}
